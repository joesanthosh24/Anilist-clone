import React, { useState } from "react";

import "./horizontal-anime-lists.styles.css";

const HorizontalAnimeLists = () => {
  const [animes, setAnimes] = useState([
    {
      name: "One Piece",
    },
    {
      name: "Enen no Shouboutai: Ni no Shou",
    },
    {
      name: "Uzaki-chan wa Asobitai!",
    },
    {
      name: "Kanajou, Okarishimasu",
    },
    {
      name:
        "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou",
    },
  ]);

  return (
    <div className="horizontalAnimeLists">
      {animes.map(({ name }) => (
        <div className="horizontalAnimeLists__animeContainer">
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default HorizontalAnimeLists;
