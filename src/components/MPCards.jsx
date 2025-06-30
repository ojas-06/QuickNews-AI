import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
export default function MPCards({ articles }) {
  const navigate = useNavigate();
  return (
    <>
      {articles.map((article) => {
        if (
          !article.title ||
          !article.urlToImage ||
          !article.description ||
          article.description === 'null'
        )
          return null;
        return (
          <div
            key={`${article.title}`}
            className="card mb-3 text-bg-dark mycard"
            style={{ margin: '30px' }}
            onClick={() =>
              navigate(`/view/headline/${encodeURIComponent(article.url)}`)
            }
          >
            <div className="row g-0">
              <div className="col-md-4 imgDiv">
                <img
                  src={`${article.urlToImage}`}
                  className="img-fluid rounded-start imgSize"
                  alt="article image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{`${article.title}`}</h5>
                  <p className="card-text">{`${article.description}`}</p>
                  <figcaption className="blockquote-footer inline subtitle">
                    <cite title="Source Title">{`${article.source.name}`}</cite>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
