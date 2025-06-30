import HeadlinesPage from "./HeadlinesPage";

export default function Summary() {
  const summaries = JSON.parse(localStorage.getItem('mySummaries'));
  if (!summaries)
    return (
      <div className="newsContainer">
        <div className="left" style={{ flex: 1 }}>
          <HeadlinesPage />
        </div>
        <div className="middle" style={{ flex: 3 }}>
          <p className="mt-4 ms-4">
            Nothing to show here
          </p>
        </div>
      </div>
    );
  return (
    <div className="newsContainer">
      <div className="left" style={{ flex: 1 }}>
        <HeadlinesPage />
      </div>
      <div className="middle" style={{ flex: 3 }}>
        <h3 className="pb-4 mb-4 fst-italic border-bottom artHeading">
          Summaries
        </h3>
        {summaries.map((s) => (
          <>
            <div className="border-bottom">
              <h4 className="ms-4 mt-4">{s.title}</h4>
              <ul className="mb-4 ms-4 artP">
                <li>{s.p1}</li>
                <li>{s.p2}</li>
                <li>{s.p3}</li>
                <p className=" mt-4"></p>
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
