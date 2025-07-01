import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import NewsContainer from './components/NewsContainer.jsx';
import HeadlineView from './components/HeadlineView.jsx';
import ArticleView from './components/ArticleView.jsx';
import { HeadlinesProvider, NewsProvider } from './store/news-api-store.jsx';
import DetailDisplay from './components/DetailDisplay.jsx';
import Summary from './components/Summary.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <NewsContainer />,
      },
      {
        path: '/summaries',
        element: <Summary />,
      },
      {
        path: '/view/headline/:encodedUrl',
        element: <HeadlineView />,
      },
      {
        path: '/view/news/:encodedUrl',
        element: <ArticleView />,
      },
      {
        path: '/viewArticle',
        element: <DetailDisplay />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <NewsProvider>
    <HeadlinesProvider>
      <RouterProvider router={router} />
    </HeadlinesProvider>
  </NewsProvider>
  // </StrictMode>
);

//API return object
// {
//   "source": {
//       "id": "business-insider",
//       "name": "Business Insider"
//   },
//   "author": "fdemott@businessinsider.com (Filip De Mott)",
//   "title": "GameStop just bought $500 million of bitcoin in its first-ever crypto investment",
//   "description": "GameStop announced the purchase of 4,710 bitcoins on Wednesday. The video game retailer said in March that it would start amassing crypto.",
//   "url": "https://www.businessinsider.com/gamestop-bitcoin-price-investment-strategy-trump-media-djt-gme-metaplanet-2025-5",
//   "urlToImage": "https://i.insider.com/683700ad6ffb6822ec619ae0?width=1024&format=jpeg",
//   "publishedAt": "2025-05-28T14:20:35Z",
//   "content": "GameStop has made good on a promise to buy bitcoin, announcing on Wednesday that it purchased 4,710 tokens. \r\nAt current prices, that's worth about $513 million. The purchase comes in a bullish stret… [+1243 chars]"
// }
