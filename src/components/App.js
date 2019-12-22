import React from 'react';
import { connect } from 'react-redux';
import Map from './Map/Map.js';

const App = ({ rocket }) => {
  return (
    <div>
      <Map />
      <div>{rocket.altitude}</div>
    </div>
  );
};

const mapStateToProps = rocket => {
  return rocket;
};

export default connect(mapStateToProps)(App);
