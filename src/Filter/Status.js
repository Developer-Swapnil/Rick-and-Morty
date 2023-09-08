import React from "react";
// import { useSelector } from "react-redux";
import FilterBTN from "./FilterButtn";

const Status = () => {
  // const { characterFilterData } = useSelector((state) => state.CharacterStore);

  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="status">
      <ul class="menu">
        <li>
          <button>Status</button>

          <ul>
            {status.map((element, index) => (
              <li>
                <FilterBTN
                  name="status"
                  index={index}
                  key={index}
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

export default Status;
