import { useState, useEffect } from 'react';
import { createContext } from 'react';
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export const Headlines = createContext({
  data: [],
  loading: true,
});

export const HeadlinesProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let json;

  const fetchData = async () => {
    try {
      const response = await fetch('/.netlify/functions/getHeadlines');
      if (!response.ok) throw new Error('Network response was not ok');

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
      console.log('Headlines Reloaded');
      localStorage.setItem('headlines', JSON.stringify(json));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Headlines.Provider value={{ data, loading }}>
      {children}
    </Headlines.Provider>
  );
};

export const News = createContext({
  news: [],
  loading: true,
  setLoading: () => {},
  category: '',
  setCategory: () => {},
});

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('business');
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/.netlify/functions/getNewsbyCategory?category=${encodeURIComponent(category)}`
        );
        if (!response.ok) throw new Error('Failed to fetch news');

        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <News.Provider value={{ news, loading, category, setCategory, setLoading }}>
      {children}
    </News.Provider>
  );
};
