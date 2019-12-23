import { createStore } from 'redux';
import * as rocketActions from './actions/rocketActions.js';
import rootReducer from './reducers/rootReducer.js';
import initialState from './reducers/initialState.js';

describe('Store', () => {
  it('should launch a rocket', () => {
    const store = createStore(rootReducer, initialState);

    store.dispatch(rocketActions.launchRocket());
    const { launched } = store.getState().rocket;
    expect(launched).toBe(true);
  });

  it('should update altitude of the rocket', () => {
    const store = createStore(rootReducer, initialState);
    const newAltitude = 3.3;
    store.dispatch(rocketActions.updateAltitude(newAltitude));
    const { altitude } = store.getState().rocket;
    expect(altitude).toBe(3.3);
  });

  it('should update speed of the rocket', () => {
    const store = createStore(rootReducer, initialState);
    const newSpeed = 10;
    store.dispatch(rocketActions.updateSpeed(newSpeed));
    const { speed } = store.getState().rocket;
    expect(speed).toBe(10);
  });
});
