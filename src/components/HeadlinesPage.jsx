/* eslint-disable no-unused-vars */

import { useEffect, useState,useContext } from 'react';
import NewsCardV from './NewsCardV';
import Loading from './Loading';
import THCards from './THCards';
import {Headlines} from '../store/news-api-store'


export default function HeadlinesPage() {
  // const {data , loading} = useContext(Headlines);

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

  return (
    <div className="topHeadlines">
      <center className="tHheader">Top Headlines</center>
      <div style={{ minHeight: '100vh' }}>
        {loading && <Loading />}
        {!loading && 
          <THCards articles={data.articles} />}
      </div>
    </div>
  );
}
