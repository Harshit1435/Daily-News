import React, { useState, useEffect } from "react";

import BlogPostItem from "./BlogPostItem";

export default function BlogPostList({ category, apiKey }) {
  const [newsData, setNewsData] = useState();
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState();

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=9&category=${category}&page=${page}&apiKey=${apiKey}`
      
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("UNABLE TO GET RESPONSE");
        }
        return response.json();
      })
      .then((data) => {
        setNewsData(data.articles);
        setTotalResult(data.totalResults);
      });
  }, [page, category, apiKey]);

  return (
    <>
      <div className="list-item">
        {newsData ? (
          newsData.map((item) => {
            return (
              <BlogPostItem
                key={item.url}
                image={item.urlToImage}
                url={item.url}
                author={item.source.name}
                title={item.title}
                content={item.content}
                description={item.description}
                publishedAt={item.publishedAt}
              />
            );
          })
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
      <div className="button">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
          type="button"
        >
          Prew
        </button>
        <button
          disabled={page * 9 >= totalResults}
          onClick={() => {
            setPage(page + 1);
          }}
          type="button"
        >
          Next
        </button>
      </div>
    </>
  );
}
