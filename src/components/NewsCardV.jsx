import random from '../assets/random.webp';

export default function NewsCardV() {
  return (
    <div className="card text-bg-dark" style={{ margin: '20px 15px' }}>
      <img src={random} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
