import axios from 'axios';
const API_KEY = process.env.NEWS_API_KEY;

export default async function handler(event, context) {
  try {
    const url = event.queryStringParameters.url;
    if (!url) {
      // return new Response(JSON.stringify({ error: 'Missing URL' }), {
      //   status: 400,
      //   headers: { 'Content-Type': 'application/json' },
      // });
      return {
        statusCode: 400,
      };
    }
    const { JSDOM } = await import('jsdom');
    const { Readability } = await import('@mozilla/readability');

    const articleResponse = await axios.get(url);

    const dom = new JSDOM(articleResponse.data, {
      url: url,
    });

    const article = new Readability(dom.window.document).parse();

    return new Response(
      JSON.stringify({
        title: article.title,
        content: article.textContent,
      }),
      {
        status: articleResponse.status,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
