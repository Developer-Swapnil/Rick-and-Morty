import "./App.css";
import { useEffect } from "react";
import React from "react";
import { CharacterFilterAction } from "./Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CharacterDetailsPage from "./Pages/CharacterDetailsPage";

function App() {
  const { characterFilterData } = useSelector((state) => state.CharacterStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharacterFilterAction(characterFilterData));
  }, [characterFilterData]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
