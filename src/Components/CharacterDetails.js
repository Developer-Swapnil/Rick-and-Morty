import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageCharacters } from "../Actions/Actions";
import "./CharacterDetails.css";
import Ribbon from "./Ribbon";
const CharacterDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { specificCharacterData, location, origin, episodeNameData } =
    useSelector((state) => state.CharacterStore);

  useEffect(() => {
    dispatch(PageCharacters(id));
  }, [id]);
  return (
    <div className="main-box-charatcer">
      {Object.keys(specificCharacterData).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="character-box">
          <Ribbon status={specificCharacterData.status} />
          <div className="image-details">
            <div className="image">
              <img src={specificCharacterData.image} alt="morty" />
            </div>
            <div className="details">
              <h4>
                {specificCharacterData.name}-{specificCharacterData.species}
              </h4>
              <div>
                <div className="details-box">
                  <p className="keys">Gender:</p>
                  <p>{specificCharacterData.gender}</p>
                </div>
                {Object.keys(origin).length === 0 ? (
                  <div className="details-box">
                    <p className="keys">Origin:</p>
                    <div>
                      <ul>
                        <strong>Name: </strong>
                        Not Available
                      </ul>
                      <ul>
                        <strong>Dimension: </strong>Not Available
                      </ul>
                      <ul>
                        <strong>Residents: </strong>Not Available
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="details-box">
                    <p className="keys">Origin:</p>
                    <div>
                      <ul>
                        <strong>Name: </strong>
                        {origin.name}
                      </ul>
                      <ul>
                        <strong>Dimension: </strong>
                        {origin.dimension}
                      </ul>
                      <ul>
                        <strong>Residents: </strong>
                        {origin.residents.length}
                      </ul>
                    </div>
                  </div>
                )}
                {Object.keys(location).length === 0 ? (
                  <div className="details-box">
                    <p className="keys">Current Location:</p>
                    <div>
                      <ul>
                        <strong>Name: </strong>Not Available
                      </ul>
                      <ul>
                        <strong>Dimension: </strong>Not Available
                      </ul>
                      <ul>
                        <strong>Residents: </strong>Available
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="details-box">
                    <p className="keys">Current Location:</p>
                    <div>
                      <ul>
                        <strong>Name: </strong>
                        {location.name}
                      </ul>
                      <ul>
                        <strong>Dimension: </strong>
                        {location.dimension}
                      </ul>
                      <ul>
                        <strong>Residents: </strong>
                        {location.residents.length}
                      </ul>
                    </div>
                  </div>
                )}
                <div className="details-box">
                  <p className="keys">Type:</p>
                  <p>
                    {specificCharacterData.type === ""
                      ? "unknown"
                      : specificCharacterData.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="episodes">
            <h5>Episodes:</h5>
            <div className="episodes-box">
              {specificCharacterData.episode.length === 1 ||
              episodeNameData.length === undefined ? (
                <div className="episodes-details">{episodeNameData.name}</div>
              ) : episodeNameData.length !== 0 ? (
                episodeNameData.map((value) => (
                  <div className="episodes-details" key={value.id}>
                    <p>{value.name}</p>
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
