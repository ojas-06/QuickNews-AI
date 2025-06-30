import { Link, useNavigate } from 'react-router-dom';

export default function THCards({ articles }) {
  const navigate = useNavigate();
  return (
    <>
      {articles.map((article) => {
        if (!article.title || !article.urlToImage || !article.description)
          return null;
        return (
          <div
            key={`${article.title}`}
            className="card text-bg-dark mycard"
            style={{ margin: '20px 15px' }}
            onClick={() =>
              navigate(`/view/headline/${encodeURIComponent(article.url)}`)
            }
          >
            <img
              src={`${article.urlToImage}`}
              className="card-img-top"
              alt="article image"
            />
            <div className="card-body">
              <h5 className="card-title">{`${article.title}`}</h5>
              <p className="card-text">{`${article.description}`}</p>
              <figcaption className="blockquote-footer inline subtitle">
                <cite title="Source Title">{`${article.source.name}`}</cite>
              </figcaption>
              {/* <Link
            to={`/view/headline/${encodeURIComponent(article.url)}`}
            className="btn btn-primary mybtn"
          >
            View
          </Link> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
