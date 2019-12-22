import * as types from './actionTypes.js';

export const updateAltitude = altitude => {
  return { type: types.UPDATE_ALTITUDE, altitude };
};

export const updateSpeed = speed => {
  return { type: types.UPDATE_SPEED, speed };
};

export const launchRocket = () => {
  return { type: types.LAUNCH_ROCKET };
};
