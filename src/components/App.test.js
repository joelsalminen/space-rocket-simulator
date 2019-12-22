import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import Map from './Map/Map.js';

describe('App', () => {
  it('should render div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Map)).toHaveLength(1);
  });
});
