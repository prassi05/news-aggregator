import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { index } = useParams();
  const demoArticles = {
    0: {
      title: " AI Revolution in India",
      description: "India leads global AI innovation with new government initiatives",
      content: "Artificial Intelligence is transforming India's tech landscape. Major companies are investing billions...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      source: "TechCrunch India",
      author: "AI Desk"
    },
    1: {
      title: "Sensex Breaks 85,000 Barrier!",
      description: "Indian stock market achieves historic milestone",
      content: "BSE Sensex surges past 85,000 driven by IT and banking stocks...",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=400&fit=crop",
      source: "Economic Times", 
      author: "Market Watch"
    }
  };

  const article = demoArticles[index] || demoArticles[0];

  return (
    <div className="article-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to News</Link>
        <button className="share-btn">📤 Share</button>
      </div>
      
      <div className="article-hero">
        <img src={article.image} alt={article.title} className="article-hero-img" />
        <div className="article-meta">
          <span className="article-source">{article.source}</span>
          <span className="article-date">Jan 27, 2026</span>
        </div>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-subtitle">{article.description}</p>
      </div>

      <div className="article-content">
        <p>{article.content}</p>
        <p>This demonstrates full article functionality with professional layout, responsive design, and complete navigation.</p>
      </div>

      <div className="article-actions">
        <button className="favorite-btn">❤️ Add to Favorites</button>
        <a href="#" className="read-full-btn" target="_blank">
          Read Full Article →
        </a>
      </div>
    </div>
  );
};

export default ArticlePage;
