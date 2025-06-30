// netlify/functions/readArticle.js
import axios from 'axios';
const API_KEY = process.env.NEWS_API_KEY;

export async function handler(event, context) {
  try {
    const url = event.queryStringParameters.url;
    if (!url) {
      return new Response(JSON.stringify({ error: 'Missing URL' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { JSDOM } = await import('jsdom');
    const { Readability } = await import('@mozilla/readability');

    const articleResponse = await axios.get(url, { timeout: 8000 });

    const dom = new JSDOM(articleResponse.data, {
      url: url,
    });

    const article = new Readability(dom.window.document).parse();

    return {
      statusCode: 200,
      body: JSON.stringify({
        title: article.title,
        content: article.textContent,
      }),
    };
  } catch (err) {
    let errorMessage = 'Unknown error';
    if (axios.isAxiosError(err) && err.code === 'ECONNABORTED') {
      errorMessage = 'Timeout: The article took too long to load';
    } else if (err.message) {
      errorMessage = err.message;
    }

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: errorMessage }),
    };
  }

  // catch (err) {
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ error: err.message }),
  //   };
  // }
  //   return new Response(
  //     JSON.stringify({
  //       title: article.title,
  //       content: article.textContent,
  //     }),
  //     {
  //       status: articleResponse.status,
  //       headers: { 'Content-Type': 'application/json' },
  //     }
  //   );
  // } catch (err) {
  //   return new Response(JSON.stringify({ error: err.message }), {
  //     status: 500,
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
}
