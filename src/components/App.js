import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as rocketActions from '../redux/actions/rocketActions.js';
import Map from './Map/Map.js';

const App = ({ rocket }) => {
  console.log(rocket);
  const [altitude, setAltitude] = useState(0);
  const connectToSocket = () => {
    const url = 'ws://localhost:3000';
    const connection = new WebSocket(url);

    connection.onopen = () => {
      console.log('ws open');
      connection.send('hello');
    };

    connection.onmessage = e => {
      console.log(e.data);
      setAltitude(e.data);
    };

    connection.onerror = error => {
      console.log('ws error');
    };
  };

  useEffect(() => {
    connectToSocket();
  }, []);
  return <Map altitude={altitude} />;
};

const mapStateToProps = rocket => {
  return rocket;
};

const mapDispatchToProps = {
  updateAltitude: rocketActions.updateAltitude
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
