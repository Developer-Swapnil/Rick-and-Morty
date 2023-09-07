import { configureStore } from "@reduxjs/toolkit";

import MainReducer from "../Reducers/Reducer";

const store = configureStore({
  reducer: {
    CharacterStore: MainReducer.reducer,
  },
});

export default store;
