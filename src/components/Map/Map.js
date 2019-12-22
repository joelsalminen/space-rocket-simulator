import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Block from '../Block/Block.js';
import Rocket from '../Rocket/Rocket.js';
import * as rocketActions from '../../redux/actions/rocketActions.js';

import './Map.css';

const Map = ({ rocket, updateAltitude }) => {
  const connectToSocket = () => {
    const url = 'ws://localhost:3000';
    const connection = new WebSocket(url);

    connection.onopen = () => {
      connection.send('hello');
    };

    connection.onmessage = e => {
      updateAltitude(e.data);
    };

    connection.onerror = error => {
      console.error('ws error', error);
    };
  };

  useEffect(() => {
    connectToSocket();
  }, []);

  const renderBlocks = n => {
    return [...Array(n)].map((e, i) => <Block key={i} />);
  };

  const numberOfBlocks = 20;

  return (
    <div className="Map">
      {renderBlocks(numberOfBlocks)}
      <Rocket altitude={rocket.altitude} />
    </div>
  );
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
)(Map);
