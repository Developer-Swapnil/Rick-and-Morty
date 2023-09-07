import React from "react";
import CharacterDetails from "../Components/CharacterDetails";
import "./CharacterDetailsPage.css";
import Logo from "../Images/Rick_and_Morty.png";
import { Link } from "react-router-dom";
import "material-icons";
// import Image1 from "../Images/logo.png"
const CharacterDetailsPage = () => {
  let EpiName = [];

  return (
    <div>
      <header className="header">
        <img src={Logo} alt="rickandmorty" />
      </header>
      <div className="middle-part">
        <div className="button-part">
          <Link to={"/"}>
            <button className="button">
              <span class="material-icons">arrow_back</span>Go Back
            </button>
          </Link>
        </div>
        <CharacterDetails EpiName={EpiName} />
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
