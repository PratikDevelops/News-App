import React from 'react';
import './NewsItem.css'; 

function NewsItem({ title, description, src, url }) {
  return (
    <div className="news-item">
      <img
        src={src}
        alt={title}
        className="news-image"
      />
      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-description">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-btn"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
