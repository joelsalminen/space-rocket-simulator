import React from 'react';
import { connect } from 'react-redux';
import Map from './Map/Map.js';
import RocketData from './RocketData/RocketData.js';
import RocketControls from './RocketControls/RocketControls.js';
import './App.css';

const App = ({ rocket }) => {
  return (
    <div className="App">
      <Map />
      <RocketData altitude={rocket.altitude} />
      <RocketControls />
    </div>
  );
};

const mapStateToProps = rocket => {
  return rocket;
};

export default connect(mapStateToProps)(App);
