import { useState, useEffect } from 'react';
import { createContext } from 'react';
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
console.log('🔑 API Key:', import.meta.env.VITE_NEWS_API_KEY);
export const Headlines = createContext({
  data: [],
  loading: true,
});
// {
//   headers: {
//     'User-Agent': 'Mozilla/5.0', // some APIs require this
//   },
// }
export const HeadlinesProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let json;
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us`,
  //       {
  //         headers: {
  //           'X-Api-Key': import.meta.env.VITE_NEWS_API_KEY,
  //           'User-Agent': 'Mozilla/5.0',
  //           Origin: 'https://quicknewsai.netlify.app/',
  //         },
  //       }
  //     );
  //     if (!response.ok) throw new Error('Network response was not ok');

  //     json = await response.json();
  //     setData(json);
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   } finally {
  //     setLoading(false);
  //     console.log('Headlines Reloaded');
  //     localStorage.setItem('headlines', JSON.stringify(json));
  //   }
  // };

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
  //useEffect(() => {
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${category}`,
  //       {
  //         headers: {
  //           'X-Api-Key': import.meta.env.VITE_NEWS_API_KEY,
  //           'User-Agent': 'Mozilla/5.0',
  //           Origin: 'https://quicknewsai.netlify.app/',
  //         },
  //       }
  //     );
  //     if (!response.ok) throw new Error('Network response was not ok');

  //     const json = await response.json();
  //     setNews(json);
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   } finally {
  //     setLoading(false);
  //     console.log('NewsReloaded');
  //   }
  //};
  //fetchData();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/.netlify/functions/getNewsByCategory?category=${encodeURIComponent(category)}`
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
