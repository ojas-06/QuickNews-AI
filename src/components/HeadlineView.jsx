import { useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import { Headlines } from '../store/news-api-store';
import Loading from './Loading';
let article;
export default function HeadlineView() {
  // const data = JSON.parse(localStorage.getItem('headlines'));
  // const { encodedUrl } = useParams();
  // const decodedUrl = decodeURIComponent(encodedUrl);

  // for (const a of data.articles) {
  //   if (a.url === decodedUrl) {
  //     article = a;
  //     break;
  //   }
  // }
  // console.log(article);
  // return (
  //   <>
  //     <div style={{ height: '100px' }}></div>
  //     <div className="card mb-3 text-bg-dark" style={{ margin: '30px' }}>
  //       <div className="row g-0">
  //         <div className="col-md-4">
  //           <img
  //             src={`${article.urlToImage}`}
  //             className="img-fluid rounded-start"
  //             alt="..."
  //           />
  //         </div>
  //         <div className="col-md-8">
  //           <div className="card-body">
  //             <h5 className="card-title">{`${article.title}`}</h5>
  //             <p className="card-text">{`${article.content}`}</p>
  //             <p className="card-text">
  //               <small className="text-body-secondary">
  //                 Last updated 3 mins ago
  //               </small>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //  </>
  //);

  // // we need axios to make HTTP requests
  // const axios = require('axios');

  // // and we need jsdom and Readability to parse the article HTML
  // const { JSDOM } = require('jsdom');
  // const { Readability } = require('@mozilla/readability');

  // // Make the request with axios' get() function
  // axios.get(url).then(function (r1) {
  //   // ...and download the HTML for it, again with axios
  //   axios.get(article.url).then(function (r2) {
  //     // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
  //     let dom = new JSDOM(r2.data, {
  //       url: article.url,
  //     });

  //     // now pass the DOM document into readability to parse
  //     let readArticle = new Readability(dom.window.document).parse();

  //     // Done! The article content is in the textContent property
  //     console.log(readArticle.textContent);
  //   });
  // });
  return;
}
