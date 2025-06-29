import fetch from 'node-fetch';

export async function handler(event, context) {
  const API_KEY = process.env.NEWS_API_KEY;
  const category = event.queryStringParameters.category || 'business';

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(category)}`,
      {
        headers: {
          'X-Api-Key': API_KEY
        },
      }
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'NewsAPI request failed' }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
