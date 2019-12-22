import * as types from './actionTypes.js';

export const updateAltitude = altitude => {
  return { type: types.UPDATE_ALTITUDE, altitude };
};

export const launchRocket = () => {
  return { type: types.LAUNCH_ROCKET };
};
