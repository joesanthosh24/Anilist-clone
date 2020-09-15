import React from "react";

import "./navbar.styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src="https://anilist.co/img/icons/icon.svg" alt="Anilist Icon" />
      </div>
      <div className="navbar__middle">
        <a className="navbar__link">Browse</a>
        <a className="navbar__link">Social</a>
        <a className="navbar__link">Forum</a>
      </div>
      <div className="navbar__right">
        <a className="navbar__link">Login</a>
        <a href="" className="navbar__link navbar__signUp">Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;
