import { useState, useEffect } from "react";
import { createContext } from "react";

export const Headlines = createContext({
  data:[],
  loading:true,
});

export const HeadlinesProvider = ({chidren}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
      }
    };
    fetchData();
    if (loading) console.log(loading);
    if (!loading) console.log('loaded');

    if (data) console.log(data.articles);
  }, []);

  return(
    <Headlines.Provider value = {{data , loading}} >
      {chidren}
    </Headlines.Provider>
  );
}

