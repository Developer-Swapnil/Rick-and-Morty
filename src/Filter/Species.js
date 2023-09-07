import React from "react";
import FilterBTN from "./FilterButtn";
import "./Filter.css";
const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="status">
      <ul class="species">
        <li>
          <button>Species</button>

          <ul>
            {species.map((element, index) => (
              <li>
                <FilterBTN
                  name="species"
                  index={index}
                  key={index}
                  updatePageNumber={updatePageNumber}
                  task={updateSpecies}
                  input={element}
                />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Species;
