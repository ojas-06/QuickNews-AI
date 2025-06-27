import { useState, useContext } from 'react';
import MiniNav from './MiniNav';
import NewsCardH from './NewsCardH';
import { News } from '../store/news-api-store';
import Loading from './Loading';
import MPCards from './MPCards';
import THCards from './THCards';
export default function MainPage() {
  const { news, loading } = useContext(News);
  if (!news.articles) {
    console.log('nperror');
    return;
  }
  return (
    <>
      <MiniNav />
      {loading && <Loading />}
      {!loading && <MPCards articles={news.articles} />}
    </>
  );
}
