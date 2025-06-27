import { useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import { Headlines } from '../store/news-api-store';
import Loading from './Loading';

export default function HeadlineView() {
  const data = JSON.parse(localStorage.getItem('headlines'));
  const { encodedUrl } = useParams();
  const decodedUrl = decodeURIComponent(encodedUrl);
  let article;
  for (const a of data.articles) {
    if (a.url === decodedUrl) {
      article = a;
      break;
    }
  }
  console.log(article);
  return (
    <>
      <div style={{ height: '100px' }}></div>
      <div className="card mb-3 text-bg-dark" style={{ margin: '30px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${article.urlToImage}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{`${article.title}`}</h5>
              <p className="card-text">{`${article.content}`}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
