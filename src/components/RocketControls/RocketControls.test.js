import React from 'react';
import { shallow, mount } from 'enzyme';
import RocketControls from './RocketControls.js';

describe('RocketControls', () => {
  it('should render a button', () => {
    const wrapper = shallow(<RocketControls launchRocket={() => {}} />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should call a parameter function on click', () => {
    const spy = jest.fn();
    const wrapper = shallow(<RocketControls launchRocket={spy} />);

    expect(spy).not.toHaveBeenCalled();
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should disable the button after it has been clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(<RocketControls launchRocket={spy} />);

    const buttonBeforeClick = wrapper.find('button');
    expect(buttonBeforeClick.props().disabled).toBe(false);

    wrapper.simulate('click');
    const buttonAfterClick = wrapper.find('button');
    expect(buttonAfterClick.props().disabled).toBe(true);
  });
});
