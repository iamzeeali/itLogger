import * as types from './types';

//Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: types.GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: types.LOGS_ERROR,
      payload: err.response.data
    });
  }
};

//Add new Log
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: types.ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: types.LOGS_ERROR,
      payload: err.response.data
    });
  }
};

//Delete log from server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: types.DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: types.LOGS_ERROR,
      payload: err.response.data
    });
  }
};

//Set Loading to true
export const setLoading = () => {
  return {
    type: types.SET_LOADING
  };
};
