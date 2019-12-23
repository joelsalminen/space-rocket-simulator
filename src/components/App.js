import React from 'react';
import { connect } from 'react-redux';
import * as rocketActions from '../redux/actions/rocketActions.js';

import Map from './Map/Map.js';
import RocketData from './RocketData/RocketData.js';
import RocketControls from './RocketControls/RocketControls.js';
import './App.css';

export const App = ({ rocket, launchRocket }) => {
  return (
    <div className="App">
      <RocketControls launchRocket={launchRocket} />

      <div className="MapContainer">
        <Map />
        <RocketData
          altitude={rocket.altitude}
          speed={rocket.speed}
          launched={rocket.launched}
        />
      </div>
    </div>
  );
};

const mapStateToProps = rocket => {
  return rocket;
};

const mapDispatchToProps = {
  launchRocket: rocketActions.launchRocket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
