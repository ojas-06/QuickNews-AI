export default function MPCards({ articles }) {
  console.log(articles);
  return (
    <>
      {articles.map((article) => (
        <div
          key={`${article.title}`}
          className="card mb-3 text-bg-dark"
          style={{ margin: '30px' }}
        >
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
                    {`${article.publishedAt}`}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
