import * as types from './types';

//Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: types.GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: types.TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Add technician to server
export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: types.ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: types.TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: types.SET_LOADING
  };
};
