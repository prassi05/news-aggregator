import React from "react";

export default function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img
        src={news.urlToImage || "https://via.placeholder.com/300"}
        alt="news"
      />
      <h3>{news.title}</h3>
      <p>{news.description || "No description available."}</p>
      <a href={news.url} target="_blank" rel="noreferrer">
        Read More →
      </a>
    </div>
  );
}
