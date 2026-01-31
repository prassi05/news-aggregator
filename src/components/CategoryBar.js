const categories = [
  "technology",
  "business",
  "sports",
  "health",
  "entertainment",
  "science",
];

const CategoryBar = ({ activeCategory, setCategory }) => {
  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={activeCategory === cat ? "active" : ""}
          onClick={() => setCategory(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
