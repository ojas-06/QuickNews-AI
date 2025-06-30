import { useState, useEffect } from 'react';
import HeadlinesPage from './HeadlinesPage';
import { renderToString } from 'react-dom/server';

import { GoogleGenAI } from '@google/genai';
import { useNavigate } from 'react-router-dom';
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

async function summarize({ content, setLoading, setSummary }) {
  try {
    setLoading(1);
    const contents = [
      {
        parts: [
          {
            text: `Summarize the following in 3 bullet points:\n${content}`,
          },
        ],
      },
    ];
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
    });
    const result = await response.text;
    setSummary(result);
  } catch {
    if (error && error.error && error.error.message) {
      console.error('Gemini API Error:', error.error.message);
      alert(`❌ Gemini API Error: ${error.error.message}`);
    } else if (error instanceof Error) {
      console.error('Unexpected error:', error.message);
      alert(`❌ Unexpected Error: ${error.message}`);
    } else {
      console.error('Unknown error object:', error);
      alert('❌ An unknown error occurred.');
    }
  } finally {
    setLoading(2);
  }
}

function processResult(title, summary) {
  const p1 = summary.split('*')[1];
  const p2 = summary.split('*')[2];
  const p3 = summary.split('*')[3];
  const summaryObj = {
    title: title,
    p1: p1,
    p2: p2,
    p3: p3,
  };
  let oldSum = JSON.parse(localStorage.getItem('mySummaries')) || [];
  if (!oldSum.some((i) => i.title === summaryObj.title))
    localStorage.setItem(
      'mySummaries',
      JSON.stringify([summaryObj, ...oldSum])
    );

  return (
    <div className="border-bottom">
      <h4 className="ms-4">Summary</h4>
      <ul className="mb-4 ms-4 artP">
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
        <p className=" mt-4"></p>
      </ul>
    </div>
  );
}

export default function DetailDisplay({ article }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!article) navigate('/');
  }, [article, navigate]);

  if (!article) return null;
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(0);
  return (
    <div className="newsContainer">
      <div className="left" style={{ flex: 1 }}>
        <HeadlinesPage />
      </div>
      <div className="middle" style={{ flex: 3 }}>
        <h3 className="pb-4 mb-4 fst-italic border-bottom artHeading">
          <center>{article.title}</center>
        </h3>

        {loading === 1 && (
          <center>
            <button
              className="btn btn-outline-secondary"
              type="button"
              disabled=""
            >
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status">&nbsp;Loading...</span>
            </button>
          </center>
        )}
        {loading === 0 && (
          <center>
            <button
              className="btn btn-secondary summarizeBtn"
              type="button"
              onClick={() => {
                summarize({
                  content: article.content,
                  setLoading: setLoading,
                  setSummary: setSummary,
                });
              }}
            >
              Generate AI Summary
            </button>
          </center>
        )}
        {loading === 2 && processResult(article.title, summary)}

        <p className="artP">{article.content}</p>
      </div>
    </div>
  );
}
