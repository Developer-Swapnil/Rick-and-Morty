import axios from "axios";
import { characterAction } from "../Reducers/Reducer";

export const CharacterFilterAction = (filterUpdate) => async (dispatch) => {
  try {
    dispatch(characterAction.characterReducer({ type: "DATA_REQUESTED" }));

    const data = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${filterUpdate.pageNumber}&name=${filterUpdate.name}&status=${filterUpdate.status}&gender=${filterUpdate.gender}&species=${filterUpdate.species}`
    );
    if (data.status === 200) {
      dispatch(
        characterAction.characterReducer({
          type: "DATA_SUCCESS",
          payload: data.data,
        })
      );
    }
  } catch (error) {
    dispatch(
      characterAction.characterReducer({
        type: "DATA_FAIL",
        payload: error.response.data.error,
      })
    );
  }
};

export const PageCharacters = (id) => async (dispatch) => {
  try {
    dispatch(
      characterAction.specificCharacterReducer({ type: "DATA_REQUESTED" })
    );

    const data = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (data.status === 200) {
      dispatch(
        characterAction.specificCharacterReducer({
          type: "DATA_SUCCESS",
          payload: data.data,
        })
      );
      dispatch(LocationAction(data.data));
      dispatch(EpisodesAction(data.data.episode));
    }
  } catch (error) {
    dispatch(
      characterAction.specificCharacterReducer({
        type: "DATA_FAIL",
        payload: error.response.data.error,
      })
    );
  }
};

const getIds = (urls) => {
  let ids = [];

  urls.forEach((element) => {
    ids.push(parseInt(element.match(/\d+/g)[0]));
  });
  return ids;
};

const EpisodesAction = (episodesData) => async (dispatch) => {
  try {
    dispatch(characterAction.episodeReducer({ type: "DATA_REQUESTED" }));
    let EpisodesId = [];
    if (episodesData.length !== 0) {
      EpisodesId = getIds(episodesData);
    }
    const data = await axios.get(
      `https://rickandmortyapi.com/api/episode/${EpisodesId}`
    );
    if (data.status === 200) {
      dispatch(
        characterAction.episodeReducer({
          type: "DATA_SUCCESS",
          payload: data.data,
        })
      );
    }
  } catch (error) {
    dispatch(
      characterAction.episodeReducer({
        type: "DATA_FAIL",
        payload: error.response.data.error,
      })
    );
  }
};

const LocationAction = (characterData) => async (dispatch) => {
  try {
    dispatch(characterAction.locationReducer({ type: "DATA_REQUESTED" }));

    const CurrentLocationData =
      characterData.location.url !== ""
        ? await axios.get(`${characterData.location.url}`)
        : { status: 400, message: "url not found" };

    const OriginLocationData =
      characterData.origin.url !== ""
        ? await axios.get(`${characterData.origin.url}`)
        : { status: 400, message: "url not found" };

    if (CurrentLocationData.status === 200) {
      dispatch(
        characterAction.locationReducer({
          type: "current-location",
          payload: CurrentLocationData.data,
        })
      );
    }

    if (OriginLocationData.status === 200) {
      dispatch(
        characterAction.locationReducer({
          type: "origin-location",
          payload: OriginLocationData.data,
        })
      );
    }
  } catch (error) {
    dispatch(
      characterAction.locationReducer({
        type: "error",
        payload: error.response.data.error,
      })
    );
  }
};
