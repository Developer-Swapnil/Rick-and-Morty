import React from "react";
import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { characterAction } from "../Reducers/Reducer";

const Filter = () => {
  const dispatch = useDispatch();

  let clear = () => {
    dispatch(characterAction.statusReducer({ type: "clear" }));
    window.location.reload(false);
  };

  return (
    <div className="filter-box">
      <div className="heading">Filters</div>
      <div className="clear-filters" onClick={clear}>
        Clear Filters
      </div>
      <div className="contents">
        <Status />
        <Species />
        <Gender />
      </div>
    </div>
  );
};

export default Filter;
