import * as types from '../actions/actionTypes.js';
import initialState from './initialState.js';

const rocketReducer = (state = initialState.rocket, action) => {
  switch (action.type) {
    case types.UPDATE_ALTITUDE:
      return { ...state, altitude: action.altitude };
    default:
      return state;
  }
};

export default rocketReducer;
