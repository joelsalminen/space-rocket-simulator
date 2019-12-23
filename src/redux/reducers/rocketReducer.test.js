import * as actions from '../actions/rocketActions.js';
import rocketReducer from './rocketReducer.js';

describe('courseReducer', () => {
  describe('updateAltitude', () => {
    it('should return a rocket object with modified altitude, while other properties should remain unchanged', () => {
      const state = { altitude: 0, speed: 15, launched: true };
      const newAltitude = 3;
      const action = actions.updateAltitude(newAltitude);
      const newState = rocketReducer(state, action);

      expect(newState.altitude).toBe(3);
      expect(newState.speed).toBe(15);
      expect(newState.launched).toBe(true);
    });
  });

  describe('updateSpeed', () => {
    it('should return a rocket object with modified speed, while other properties should remain unchanged', () => {
      const state = { altitude: 0, speed: 15, launched: true };
      const newSpeed = 30;
      const action = actions.updateSpeed(newSpeed);
      const newState = rocketReducer(state, action);

      expect(newState.altitude).toBe(0);
      expect(newState.speed).toBe(30);
      expect(newState.launched).toBe(true);
    });
  });

  describe('launchRocket', () => {
    it('should return a rocket object with launched property set to true, while other properties should remain unchanged', () => {
      const state = { altitude: 0, speed: 0, launched: false };
      const launched = true;
      const action = actions.launchRocket(launched);
      const newState = rocketReducer(state, action);

      expect(newState.altitude).toBe(0);
      expect(newState.speed).toBe(0);
      expect(newState.launched).toBe(true);
    });
  });
});
