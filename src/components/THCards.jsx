import { Link } from 'react-router-dom';

export default function THCards({ articles }) {
  if (!articles) {
    console.log('thcards error');
    return;
  }
  return (
    <>
      {articles.map((article) => (
        <div
          key={`${article.title}`}
          className="card text-bg-dark"
          style={{ margin: '20px 15px' }}
        >
          <img
            src={`${article.urlToImage}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{`${article.title}`}</h5>
            <p className="card-text">{`${article.description}`}</p>
            <Link
              to={`/view/headline/${encodeURIComponent(article.url)}`}
              className="btn btn-primary mybtn"
            >
              View
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
