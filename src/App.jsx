import React, { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/long_dummy_articles.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setArticles(data.articles || data); // covers both structures
      })
      .catch((err) => console.error("Error loading articles:", err));
  }, []);
  

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Article List</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
