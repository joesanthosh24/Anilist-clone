import React from 'react';

import './App.css';

import Navbar from "./components/navbar/navbar.component";
import Banner from "./components/banner/banner.component";
import SearchFilters from "./components/search-filters/search-filters.component";
import HorizontalAnimeLists from "./components/horizontal-anime-lists/horizontal-anime-lists.component";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <SearchFilters />
      <HorizontalAnimeLists />
      {/* <TopAnimeList /> */}
    </div>
  );
}

export default App;
