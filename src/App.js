import React, { useEffect, useState } from "react";

import "./App.css";

import { animeData } from "./animeData";

import Navbar from "./components/navbar/navbar.component";
import Banner from "./components/banner/banner.component";
import SearchFilters from "./components/search-filters/search-filters.component";
import HorizontalAnimeLists from "./components/horizontal-anime-lists/horizontal-anime-lists.component";

function App() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const keys = Object.keys(animeData);

    const initialize = () => {
      setAnimes(
        keys.map((key) => {
          return { title: key, animesInList: animeData[key] };
        })
      );
    };

    initialize();
  }, []);

  console.log(animes);

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <SearchFilters />
      {animes.map(({ title, animesInList }) => (
        <HorizontalAnimeLists
          key={title}
          category={title}
          animes={animesInList}
        />
      ))}
      {/* <HorizontalAnimeLists />
      <HorizontalAnimeLists />
      <HorizontalAnimeLists />
      <HorizontalAnimeLists /> */}
    </div>
  );
}

export default App;
