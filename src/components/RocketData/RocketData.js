import React from 'react';
import './RocketData.css';

const RocketData = ({ altitude, speed }) => {
  return (
    <div className="RocketData">
      <p>Altitude: </p>
      <p>{altitude} m</p>
      <p>Speed: </p>
      <p>{speed} m/s</p>
    </div>
  );
};

export default RocketData;
