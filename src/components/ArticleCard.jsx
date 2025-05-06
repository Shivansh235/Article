import React from "react";

function ArticleCard({ article }) {
  const truncate = (text, limit = 150) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <div className="p-4 border rounded shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-700">{truncate(article.content)}</p>
    </div>
  );
}

export default ArticleCard;
