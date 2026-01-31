import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import NewsList from "./components/NewsList";
import Spinner from "./components/Spinner";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import "./App.css";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY || "f5739868c19b4c69bce3c101f4edc61f";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("technology");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryData = (currentCategory) => {
    const categoryData = {
      technology: [
        {
          title: " AI Revolution in India",
          description: "Artificial Intelligence transforms Indian startups",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=350&h=200&fit=crop",
          source: { name: "TechCrunch India" },
          publishedAt: "2026-01-27"
        },
        {
          title: "6G Network Goes Live",
          description: "India launches next-generation internet speeds",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1558494949-efed5f2fff25?w=350&h=200&fit=crop",
          source: { name: "The Hindu Tech" },
          publishedAt: "2026-01-27"
        }
      ],
      business: [
        {
          title: "Sensex Hits 85,000!",
          description: "Indian stock market reaches all-time high",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=350&h=200&fit=crop",
          source: { name: "Economic Times" },
          publishedAt: "2026-01-27"
        },
        {
          title: " RBI Cuts Interest Rates",
          description: "Major boost for Indian economy",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=350&h=200&fit=crop",
          source: { name: "Business Standard" },
          publishedAt: "2026-01-27"
        }
      ],
      sports: [
        {
          title: " India Wins Test Series 3-0",
          description: "Dominant performance against Australia",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=350&h=200&fit=crop",
          source: { name: "ESPN Cricinfo" },
          publishedAt: "2026-01-27"
        },
        {
          title: "ISL Final: Mumbai City Champs!",
          description: "Dramatic victory in Indian Super League",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1558998154-b7eb7f2a6ba1?w=350&h=200&fit=crop",
          source: { name: "Goal India" },
          publishedAt: "2026-01-27"
        }
      ],
      health: [
        {
          title: " India's Vaccination Drive Success",
          description: "100% coverage achieved nationwide",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=350&h=200&fit=crop",
          source: { name: "The Times of India" },
          publishedAt: "2026-01-27"
        },
        {
          title: " Ayurveda Goes Global",
          description: "Indian traditional medicine gains worldwide recognition",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1612688591762-3476a0a7b2b8?w=350&h=200&fit=crop",
          source: { name: "Health Today" },
          publishedAt: "2026-01-27"
        }
      ],
      entertainment: [
        {
          title: " Bollywood's Biggest Blockbuster",
          description: "New Shah Rukh Khan film breaks records",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1489598491699-9611d7333b4e?w=350&h=200&fit=crop",
          source: { name: "India Today" },
          publishedAt: "2026-01-27"
        },
        {
          title: " OTT Wars Heat Up",
          description: "Netflix vs Prime Video in India",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1612112946215-79c1c3fba4d2?w=350&h=200&fit=crop",
          source: { name: "Variety India" },
          publishedAt: "2026-01-27"
        }
      ],
      science: [
        {
          title: " ISRO's Mars Mission Success",
          description: "India's second Mars orbiter deployed",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=350&h=200&fit=crop",
          source: { name: "ISRO Official" },
          publishedAt: "2026-01-27"
        },
        {
          title: " India's Quantum Computer Live",
          description: "World's fastest quantum processor unveiled",
          url: "#",
          urlToImage: "https://images.unsplash.com/photo-1639325676749-9a26d5e3eeae?w=350&h=200&fit=crop",
          source: { name: "Science India" },
          publishedAt: "2026-01-27"
        }
      ]
    };
    return categoryData[currentCategory] || categoryData.technology;
  };

  const fetchNews = useCallback(async () => {
    setLoading(true);
    console.log("Fetching", category, "news... Search:", searchQuery);
    
    try {
      let url;
      if (searchQuery.trim()) {
        url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&language=en&sortBy=relevancy&apiKey=${API_KEY}`;
        console.log(" SEARCH URL:", url);
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
        console.log(" CATEGORY URL:", url);
      }
      
      const res = await fetch(url);
      const data = await res.json();
      console.log(" API Response:", data);
      
      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
        console.log(" Real news loaded:", data.articles.length, "articles");
      } else {
        console.log(" Using category-specific dummy data");
        const categoryArticles = getCategoryData(category);
        setArticles(categoryArticles);
        console.log("Category data loaded:", categoryArticles.length, "articles");
      }
    } catch (error) {
      console.error('❌ API Error:', error);
      const categoryArticles = getCategoryData(category);
      setArticles(categoryArticles);
    } finally {
      setLoading(false);
      console.log("✅ Load complete -", category, "news ready!");
    }
  }, [category, searchQuery, API_KEY]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const filteredArticles = searchQuery.trim() 
    ? articles 
    : articles.filter((news) =>
        news.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSearch = (term) => {
    if (term.trim()) {
      setSearchQuery(term);
      setSearchTerm(term);
    } else {
      setSearchQuery("");
      setSearchTerm("");
    }
  };

  console.log("Rendering:", filteredArticles.length, "articles for", category, "Search:", searchQuery);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          onSearch={handleSearch}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CategoryBar
                  activeCategory={category}
                  setCategory={setCategory}
                />
                {loading ? (
                  <Spinner />
                ) : (
                  <NewsList articles={filteredArticles} />
                )}
              </>
            }
          />
          <Route path="/category/:type" element={<CategoryPage />} />
          <Route path="/article/:index" element={<ArticlePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
