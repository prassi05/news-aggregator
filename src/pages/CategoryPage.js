// CategoryPage
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NewsList from '../components/NewsList';

const CategoryPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  
  const dummyArticles = [
    { title: `${type?.toUpperCase()} News Headline 1`, description: "Description", url: "#", urlToImage: "https://via.placeholder.com/300" },
    { title: `${type?.toUpperCase()} News Headline 2`, description: "Description", url: "#", urlToImage: "https://via.placeholder.com/300" },
    { title: `${type?.toUpperCase()} News Headline 3`, description: "Description", url: "#", urlToImage: "https://via.placeholder.com/300" }
  ];

  // Redirect if invalid category
  if (!type || !['general','business','entertainment','health','science','sports','technology'].includes(type)) {
    navigate('/');
    return null;
  }

  return (
    <div className="category-page">
      <h1>{type.toUpperCase()} News</h1>
      <NewsList articles={dummyArticles} />
    </div>
  );
};

export default CategoryPage;
