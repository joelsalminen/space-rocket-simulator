import React from 'react';
import { connect } from 'react-redux';
import * as rocketActions from '../../redux/actions/rocketActions.js';

const RocketControls = ({ launchRocket }) => {
  return <button onClick={launchRocket}>Launch</button>;
};

const mapStateToProps = () => {};

const mapDispatchToProps = {
  launchRocket: rocketActions.launchRocket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RocketControls);
