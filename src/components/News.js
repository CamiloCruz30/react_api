import React from "react";

const News = ({ news = [] }) => {
  return (
    <div>
      {news.map((item, index) => (
        <div key={index}>
          <div>
              <p>
                  {item.title}
              </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
