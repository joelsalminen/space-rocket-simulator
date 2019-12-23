import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App.js';
import Map from './Map/Map.js';
import RocketData from './RocketData/RocketData.js';
import RocketControls from './RocketControls/RocketControls.js';

describe('App', () => {
  const rocket = { altitude: 0, speed: 0, launched: false };
  it('should render Map', () => {
    const wrapper = shallow(<App rocket={rocket} />);
    expect(wrapper.find(Map)).toHaveLength(1);
  });

  it('should render RocketData', () => {
    const wrapper = shallow(<App rocket={rocket} />);
    expect(wrapper.find(RocketData)).toHaveLength(1);
  });

  it('should render RocketControls', () => {
    const wrapper = shallow(<App rocket={rocket} />);
    expect(wrapper.find(RocketControls)).toHaveLength(1);
  });
});
