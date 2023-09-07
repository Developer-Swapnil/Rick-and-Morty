import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Character.css";
// import { PageCharacter } from "../Actions/Actions";

const CharacterComponent = () => {
  const { characterData } = useSelector((state) => state.CharacterStore);
  return (
    <React.Fragment>
      {Object.keys(characterData).length === 0 ? (
        <div>Loading..</div>
      ) : (
        characterData.results.map((element) => {
          return (
            <div className="main" key={element.id}>
              <div className="box">
                <div className="image">
                  <img src={element.image} alt={element.name} />
                </div>
                <div className="text-div">
                  <div className="name">
                    <Link to={`/${element.id}`} className="section">
                      <h2>{element.name}</h2>
                    </Link>
                    <span className="span">
                      <span className={`status_icon ${element.status}`}></span>
                      {element.status}-{element.species}
                    </span>
                  </div>
                  <div className="location">
                    <span className="location-span">Last known location:</span>
                    <div className="location-link">
                      <h4>{element.location.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
};

export default CharacterComponent;
