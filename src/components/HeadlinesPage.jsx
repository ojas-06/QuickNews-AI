/* eslint-disable no-unused-vars */

import { useEffect, useState, useContext } from 'react';
import NewsCardV from './NewsCardV';
import Loading from './Loading';
import THCards from './THCards';
import { Headlines } from '../store/news-api-store';

export default function HeadlinesPage() {
  
  const { data, loading } = useContext(Headlines);
  if (loading || !data || !data.articles) {
    return <Loading />;
  }
  return (
    <div className="topHeadlines">
      <center className="tHheader">Top Headlines</center>
      <div style={{ minHeight: '100vh' }}>
        {loading && <Loading />}
        {!loading && <THCards articles={data.articles} />}
      </div>
    </div>
  );
}
