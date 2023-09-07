import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  characterData: {},
  specificCharacterData: {},
  error: null,
  location: "",
  origin: "",
  characterFilterData: {
    pageNumber: 1,
    status: "",
    gender: "",
    species: "",
    name: "",
  },
  episodeNameData: [],
  loading: false,
};
const MainReducer = createSlice({
  name: "Character Reducer",
  initialState,
  reducers: {
    characterReducer(state, action) {
      const status = action.payload;
      if (status.type === "DATA_REQUESTED") {
        state.loading = true;
      } else if (status.type === "DATA_SUCCESS") {
        state.loading = false;
        state.characterData = status.payload;
      } else if (status.type === "DATA_FAIL") {
        state.loading = false;
        state.error = status.payload;
      }
    },
    specificCharacterReducer(state, action) {
      const status = action.payload;
      if (status.type === "DATA_REQUESTED") {
        state.loading = true;
      } else if (status.type === "DATA_SUCCESS") {
        state.loading = false;
        state.specificCharacterData = status.payload;
      } else if (status.type === "DATA_FAIL") {
        state.loading = false;
        state.error = status.payload;
      }
    },
    statusReducer(state, action) {
      const status = action.payload;

      if (status.type === "status") {
        state.characterFilterData.status = status.payload;
      } else if (status.type === "gender") {
        state.characterFilterData.gender = status.payload;
      } else if (status.type === "species") {
        state.characterFilterData.species = status.payload;
      } else if (status.type === "pageNumber") {
        state.characterFilterData.pageNumber = status.payload;
      } else if (status.type === "name") {
        state.characterFilterData.name = status.payload;
      } else if (status.type === "clear") {
        state.characterFilterData.gender = "";
        state.characterFilterData.name = "";
        state.characterFilterData.pageNumber = 1;
        state.characterFilterData.species = "";
        state.characterFilterData.status = "";
      }
    },
    locationReducer(state, action) {
      const status = action.payload;

      if (status.type === "DATA_REQUESTED") {
        state.loading = true;
      } else if (status.type === "current-location") {
        state.loading = false;
        state.location = status.payload;
      } else if (status.type === "origin-location") {
        state.loading = false;
        state.origin = status.payload;
      } else if (status.type === "error") {
        state.loading = false;
        state.error = status.payload;
      }
    },
    episodeReducer(state, action) {
      const status = action.payload;
      if (status.type === "DATA_REQUESTED") {
        state.loading = true;
      } else if (status.type === "DATA_SUCCESS") {
        state.loading = false;
        state.episodeNameData = status.payload;
      } else if (status.type === "DATA_FAIL") {
        state.loading = false;
        state.error = status.payload;
      }
    },
  },
});

export const characterAction = MainReducer.actions;

export default MainReducer;
