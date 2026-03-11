# QuickNews-AI (News.AI)

A news web app that fetches live headlines from a **News REST API** and generates a **3-point AI summary** for each article.

After deployment, directly fetching article pages from the browser caused **CORS blocks** (cross-origin restrictions). This project fixes that by moving article URL fetching to a **server-side proxy** implemented using **Netlify Functions**.

**Live Demo:** https://quicknews-ai.netlify.app  
**GitHub:** (this repo)

---

## Features
- Fetches latest headlines (title + URL) via a News REST API
- Extracts article text from the source URL (content parsing) for summarization
- Generates **3-bullet AI summaries** using an AI API
- Solves production **CORS issues** using a **Netlify Functions proxy** (browser → function → article URL)
- Responsive UI with separate components for headlines + article details

---

## Tech Stack
- **Frontend:** React (Vite), HTML, CSS
- **Serverless Proxy:** Netlify Functions
- **APIs:** News API (headlines), AI API (summarization)

---

## Project Structure
# QuickNews-AI (News.AI)

A news web app that fetches live headlines from a **News REST API** and generates a **3-point AI summary** for each article.

After deployment, directly fetching article pages from the browser caused **CORS blocks** (cross-origin restrictions). This project fixes that by moving article URL fetching to a **server-side proxy** implemented using **Netlify Functions**.

**Live Demo:** https://quicknews-ai.netlify.app  
**GitHub:** (this repo)

---

## Features
- Fetches latest headlines (title + URL) via a News REST API
- Extracts article text from the source URL (content parsing) for summarization
- Generates **3-bullet AI summaries** using an AI API
- Solves production **CORS issues** using a **Netlify Functions proxy** (browser → function → article URL)
- Responsive UI with separate components for headlines + article details

---

## Tech Stack
- **Frontend:** React (Vite), HTML, CSS
- **Serverless Proxy:** Netlify Functions
- **APIs:** News API (headlines), AI API (summarization)

---

## Project Structure
.
├── netlify/
│ └── functions/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── store/
│ │ └── news-api-store.jsx
│ ├── App.css
│ ├── App.jsx
│ └── main.jsx
├── .gitignore
├── .prettierrc
├── README.md
├── eslintfile.txt
├── eslintrcjson.txt
├── index.html
├── netlify.toml
├── package-lock.json
├── package.json
└── vite.config.js

---

## Why Netlify Functions (CORS Fix)

Locally, fetching article content directly from the client may work for some sources, but after deployment browsers block many cross-origin requests due to **CORS** policies on publisher websites.

**Fix used here:**
- Frontend sends the target article URL to a Netlify Function
- The function fetches the article server-side and returns extracted text
- Frontend uses that text to generate the AI summary

This avoids browser CORS restrictions while keeping the UI simple.

---
