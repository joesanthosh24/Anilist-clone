import React from "react";

import "./banner-subsection.styles.css";

const BannerSubsection = ({ imageUrl, title, description }) => {
  return (
    <div className="bannerSubsection">
      <img className="bannerSubsection__img" src={imageUrl} alt="Section" />
      <div className="bannerSubsection__description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BannerSubsection;
