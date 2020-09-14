import React from "react";

import "./navbar.styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src="https://anilist.co/img/icons/icon.svg" alt="Anilist Icon" />
      </div>
      <div className="navbar__middle">
        <p className="navbar__link">Browse</p>
        <p className="navbar__link">Social</p>
        <p className="navbar__link">Forum</p>
      </div>
      <div className="navbar__right">
        <p className="navbar__link">Login</p>
        <a href="" className="navbar__link">Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;
