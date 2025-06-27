import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Headlines } from '../store/news-api-store';

export default function HeadlineView() {
  const { encodedUrl } = useParams();
  const { data } = useContext(Headlines);
  const decodedUrl = decodeURIComponent(encodedUrl).split('-').join(' ');
  const article = data?.articles?.find((a) => a.title === decodedUrl);
  console.log(decodedUrl);
  console.log(data);
  console.log(article);
  return;
}
