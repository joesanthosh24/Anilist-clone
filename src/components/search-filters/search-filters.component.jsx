import React, { useState } from "react";

import "./search-filters.styles.css";
import { filters } from "./filters.data"

import CustomDropdown from "../custom-dropdown/custom-dropdown.component";

const SearchFilters = () => {
  const [options] = useState(filters)

  return (
    <div className="searchFilters">
      <div className="searchFilters__input">
        <label htmlFor="search">Search</label>
        <input id="search" type="text" />
      </div>
      <CustomDropdown labelName="Genres" choices={options.genres} />
      <CustomDropdown labelName="Year" choices={options.years} />
      <CustomDropdown labelName="Season" choices={options.seasons} />
      <CustomDropdown labelName="Format" choices={options.formats} />
      <CustomDropdown labelName="Airing Status" choices={options.airingStatus} />
    </div>
  );
};

export default SearchFilters;
