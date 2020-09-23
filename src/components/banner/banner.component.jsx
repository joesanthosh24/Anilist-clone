import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { IconButton } from "@material-ui/core";

import "./banner.styles.css";
import { bannerData } from "./banner.data";

import BannerSubsection from "../banner-subsection/banner-subsection.component";

const Banner = () => {
  const { obsessions, bringAnywhere, conversation, liking } = bannerData;

  return (
    <div className="banner">
      <h1 className="banner__heading">The next-generation anime platform</h1>
      <h2 className="banner__description">
        Track, share and discover your favorite anime and manga with AniList
      </h2>
      <div className="banner__sections">
        <div className="banner__sectionsContainer">
          <BannerSubsection
            imageUrl={obsessions.imageUrl}
            title={obsessions.title}
            description={obsessions.description}
          />
          <BannerSubsection
            imageUrl={bringAnywhere.imageUrl}
            title={bringAnywhere.title}
            description={bringAnywhere.description}
          />
        </div>
        <div className="banner__sectionsContainer">
          <BannerSubsection
            imageUrl={conversation.imageUrl}
            title={conversation.title}
            description={conversation.description}
          />
          <BannerSubsection
            imageUrl={liking.imageUrl}
            title={liking.title}
            description={liking.description}
          />
        </div>
      </div>
      <div className="banner__button">
        <span>Join Now{" "}</span>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Banner;
