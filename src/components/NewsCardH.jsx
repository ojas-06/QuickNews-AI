import random from '../assets/random.webp';

export default function NewsCardH() {
  return (
    <div className="card mb-3 text-bg-dark" style={{ margin: "30px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={random} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
