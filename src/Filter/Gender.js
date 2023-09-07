import React from "react";
import FilterBTN from "./FilterButtn";
import "./Filter.css";

const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="status">
      <ul class="menu">
        <li>
          <button>Gender</button>

          <ul>
            {genders.map((element, index) => (
              <li>
                <FilterBTN
                  name="gender"
                  index={index}
                  key={index}
                  updatePageNumber={updatePageNumber}
                  task={updateGender}
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

export default Gender;
