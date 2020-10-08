import React, { useState } from "react";

import "./horizontal-anime-lists.styles.css";

const HorizontalAnimeLists = () => {
  const [animes, setAnimes] = useState([
    {
      name: "One Piece",
      imageUrl:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",
    },
    {
      name: "Noblesse",
      imageUrl:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116005-9JRcdXOixDgz.png",
    },
    {
      name: "Kuma Kuma Kuma Bear",
      imageUrl:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114340-9KovjbYWlNGa.jpg",
    },
    {
      name: "Hunter x Hunter (2011)",
      imageUrl:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png",
    },
    {
      name: "Black Clover",
      imageUrl:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97940-bPydLjny8PUw.png",
    },
  ]);

  return (
    <>
      <div className="horizontalAnimeLists__sectionDesc">
        <p id="section">Trending Now</p>
        <p id="view-all">View All <span>&gt;</span></p>
      </div>
      <div className="horizontalAnimeLists">
        {animes.map(({ name, imageUrl }) => (
          <div className="horizontalAnimeLists__animeContainer">
            <img src={imageUrl} />
            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default HorizontalAnimeLists;
