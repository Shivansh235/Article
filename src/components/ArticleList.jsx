import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <div className="grid gap-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
