import { useState } from 'react';
import MiniNav from './MiniNav';
import NewsCardH from './NewsCardH';

export default function Main() {
  const [category,setCategory] = useState('Business');
  return (
    <>
      <MiniNav category = {category} setCategory = {setCategory}/>
      <NewsCardH />
      <NewsCardH />
      <NewsCardH />
      <NewsCardH />

      <NewsCardH />
    </>
  );
}
