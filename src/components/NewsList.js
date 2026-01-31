import React from "react";
import { Link } from "react-router-dom";

const NewsList = ({ articles }) => {
  return (
    <div className="news-grid">
      {articles.map((news, index) => (
        <Link 
          to={`/article/${index}`} 
          key={news.url || index}
          className="news-card-link"
        >
          <div className="news-card">
            {news.urlToImage ? (
              <img 
                src={news.urlToImage} 
                alt={news.title}
                className="news-image"
                onError={(e) => {e.target.style.display='none'}}
              />
            ) : (
              <div className="news-placeholder">📰</div>
            )}
            <div className="news-content">
              <h3 className="news-title">{news.title}</h3>
              <p className="news-desc">{news.description}</p>
              <div className="news-footer">
                <span className="news-source">{news.source?.name}</span>
                <span className="news-time">2 min read</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
