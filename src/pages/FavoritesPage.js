// FavoritesPage
import React from 'react';
import { Link } from 'react-router-dom';
import NewsList from '../components/NewsList';

const FavoritesPage = ({ favorites, onRemove }) => {
  return (
    <div className="favorites-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>💝 Saved Articles ({favorites.length})</h1>
      </div>
      
      {favorites.length === 0 ? (
        <div className="empty-state">
          <h3>No favorites yet</h3>
          <p>Click the heart icon on articles to save them!</p>
          <Link to="/" className="cta-btn">Browse News</Link>
        </div>
      ) : (
        <NewsList articles={favorites} onFavorite={onRemove} favorites={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
