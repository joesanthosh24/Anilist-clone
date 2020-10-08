import React from "react";

import "./horizontal-anime-lists.styles.css";

const HorizontalAnimeLists = ({ category, animes }) => {
  return (
    <>
      <div className="horizontalAnimeLists__sectionDesc">
        <p id="section">{category}</p>
        <p id="view-all">View All</p>
      </div>
      <div className="horizontalAnimeLists">
        {animes.map(({ name, imageUrl }, index) => (
          <div key={index} className="horizontalAnimeLists__animeContainer">
            <img alt={name} src={imageUrl} />
            <h1>
              {name.substr(0, 41)}
              {name.length > 41 ? "..." : ""}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default HorizontalAnimeLists;
