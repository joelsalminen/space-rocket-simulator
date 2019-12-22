import * as types from '../actions/actionTypes.js';
import initialState from './initialState.js';

const rocketReducer = (state = initialState.rocket, action) => {
  switch (action.type) {
    case types.UPDATE_ALTITUDE:
      return { ...state, altitude: action.altitude };
    case types.UPDATE_SPEED:
      return { ...state, speed: action.speed };
    case types.LAUNCH_ROCKET:
      return { ...state, launched: true };
    default:
      return state;
  }
};

export default rocketReducer;
