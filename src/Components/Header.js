import React from "react";
import logo from "../Images/Rick_and_Morty.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="main-box">
      <div className="header-image">
        <img src={logo} alt="rickAndmorty" />
      </div>
    </div>
  );
};

export default Header;
