import { Link } from 'react-router-dom';

export default function MPCards({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <div
          key={`${article.title}`}
          className="card mb-3 text-bg-dark"
          style={{ margin: '30px' }}
        >
          <div className="row g-0">
            <div className="col-md-4 imgDiv">
              <img
                src={`${article.urlToImage}`}
                className="img-fluid rounded-start imgSize"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{`${article.title}`}</h5>
                <p className="card-text">{`${article.content}`}</p>

                <figcaption className="blockquote-footer inline">
                  <cite title="Source Title">
                    {`${article.publishedAt.split('T')[0]}`}{' '}
                    {`${article.publishedAt.split('T')[1].split('Z')[0]}`}
                  </cite>
                </figcaption>

                <Link
                  to={`/view/news/${encodeURIComponent(article.title.trim().split(' ').join('-'))}`}
                  className="btn btn-primary mybtn"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
