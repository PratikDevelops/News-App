import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function Newsboard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchNews() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=96c7ec243cba420ab799a1df49c68108`
      );
      const data = await response.json();
      console.log(data); // Check if the data format is correct
      setArticles(data.articles || []);
    } catch (error) {
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <div>
      <h2>Latest News</h2>
      {loading && <p>Loading news...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {articles.length === 0 && !loading && !error && <p>No articles available.</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {articles.length > 0 &&
          articles.map((news) => (
            <NewsItem
              key={news.url}
              title={news.title || "No Title Available"}
              description={news.description || "No Description Available"}
              src={news.urlToImage || "fallback-image-url.jpg"}
              url={news.url}
            />
          ))}
      </div>
    </div>
  );
}

export default Newsboard;
