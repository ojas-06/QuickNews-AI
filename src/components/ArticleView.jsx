import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DetailDisplay from './DetailDisplay';
import Loading from './Loading';

export default function ArticleView() {
  const { encodedUrl } = useParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/.netlify/functions/readArticle?url=${encodedUrl}`
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        setArticle(data);
      } catch (error) {
        if (error.message.includes('timeout')) {
          alert(
            '⚠️ The article took too long to load. Please try again later.'
          );
        } else {
          alert(`❌ Failed to load article: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [encodedUrl]);
  return (
    <>
      {loading && <Loading />}
      {!loading && <DetailDisplay article={article} />}
    </>
  );
}
