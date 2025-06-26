export default function THCards({ articles }) {
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
            <p className="card-text">{`${article.content}`}</p>
            <a href="#" className="btn btn-primary">
              View
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
