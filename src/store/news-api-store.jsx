import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const Headlines = createContext({
  data: [],
  loading: true,
});

export const HeadlinesProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=920161e1ad514c5aa03490168f76c95e'
      );
      if (!response.ok) throw new Error('Network response was not ok');

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
      console.log('Headlines Reloaded');
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
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${category}&apiKey=920161e1ad514c5aa03490168f76c95e`
        );
        if (!response.ok) throw new Error('Network response was not ok');

        const json = await response.json();
        setNews(json);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
        console.log('NewsReloaded');
      }
    };
    fetchData();
    return;
  }, [category]);

  return (
    <News.Provider value={{ news, loading, category, setCategory, setLoading }}>
      {children}
    </News.Provider>
  );
};
