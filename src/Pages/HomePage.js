import React from "react";
import CharacterComponent from "../Components/Character";
import Header from "../Components/Header";
import { Pagination } from "../Components/Pagination";
import "./HomePage.css";
// import logo from "../Images/logo.png";
import Filter from "../Filter/Filter";
import Search from "../Components/Search";
const HomePage = () => {
  return (
    <div className="homepageMain">
      <Header></Header>
      <Search />
      <div>
        <Filter />
      </div>
      <div className="character-part">
        {/* <img src={logo} alt="logo" /> */}
        <CharacterComponent />
      </div>
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default HomePage;
