const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const category = event.queryStringParameters.category || 'business';

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(category)}`,
      {
        headers: {
          'X-Api-Key': process.env.NEWS_API_KEY, // Use plain key name in Netlify
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
