import {HeadlinesProvider} from '../store/news-api-store/';
import HeadlinesPage from './HeadlinesPage';
import Main from './Main';
import Misc from './Misc';

export default function NewsContainer() {
  return (
    <div className="newsContainer">
      <div className="left" style={{ flex: 1 }}>
        {/* <HeadlinesProvider> */}
          <HeadlinesPage />
        {/* </HeadlinesProvider> */}
      </div>
      <div className="middle" style={{ flex: 3 }}>
        <Main sx={{ flex: '3' }} />
      </div>
      <div className="right">
        <Misc sx={{ flex: '1' }} />
      </div>
    </div>
  );
}
