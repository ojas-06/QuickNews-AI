import { useState, useContext } from 'react';
import MiniNav from './MiniNav';
import NewsCardH from './NewsCardH';
import { News } from '../store/news-api-store';
import Loading from './Loading';
import MPCards from './MPCards';
import THCards from './THCards';
export default function MainPage() {
  const { data, loading } = useContext(News);
  return (
    <>
      <MiniNav />
      {loading && <Loading />}
      {!loading && <MPCards articles={data.articles} />}
    </>
  );
}
