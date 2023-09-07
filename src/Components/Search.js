import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { AllCharacter } from "../Actions/Actions";
import { characterAction } from "../Reducers/Reducer";
import "./Search.css";
const Search = () => {
  const dispatch = useDispatch("");
  const [search, setSearchHandler] = useState("");
  useEffect(() => {
    dispatch(characterAction.statusReducer({ type: "name", payload: search }));

    // console.log(search);
    // dispatch(AllCharacter(search))
  }, [search]);
  const ClickHandler = (e) => {
    e.preventDefault();
    console.log(search);
    dispatch(characterAction.statusReducer({ type: "name", payload: search }));
  };
  return (
    <div className="search-box">
      <h1 className="text-center mb-3">Characters</h1>
      <form onSubmit={(e) => ClickHandler(e)}>
        <input
          type={"search"}
          className="input"
          placeholder="Search for Characters"
          value={search}
          onChange={(e) => setSearchHandler(e.target.value)}
        />
        <button className="btn btn-primary fs-5" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
