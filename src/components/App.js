import React from 'react';
import { connect } from 'react-redux';
import Map from './Map/Map.js';
import AltitudeCounter from './AltitudeCounter/AltitudeCounter.js';
import './App.css';

const App = ({ rocket }) => {
  return (
    <div className="App">
      <Map />
      <AltitudeCounter altitude={rocket.altitude} />
    </div>
  );
};

const mapStateToProps = rocket => {
  return rocket;
};

export default connect(mapStateToProps)(App);
