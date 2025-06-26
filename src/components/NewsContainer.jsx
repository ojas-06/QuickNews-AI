import {HeadlinesProvider , NewsProvider} from '../store/news-api-store/';
import HeadlinesPage from './HeadlinesPage';
import MainPage from './MainPage';
import Misc from './Misc';

export default function NewsContainer() {
  return (
    <div className="newsContainer">
      <div className="left" style={{ flex: 1 }}>
        <HeadlinesProvider>
          <HeadlinesPage />
        </HeadlinesProvider>
      </div>
      <div className="middle" style={{ flex: 3 }}>
        <NewsProvider>
          <MainPage sx={{ flex: '3' }} />
        </NewsProvider>
      </div>
      <div className="right">
        <Misc sx={{ flex: '1' }} />
      </div>
    </div>
  );
}
