import React from 'react';
import './RocketData.css';

const RocketData = ({ altitude, speed, launched }) => {
  return (
    <div className="RocketData">
      <p style={{ fontWeight: 'bold' }}>Altitude: </p>
      <p>{altitude} m</p>
      <p style={{ fontWeight: 'bold' }}>Speed: </p>
      <p>{speed} m/s</p>
      <p style={{ fontWeight: 'bold' }}>Status:</p>
      <p>{launched ? 'Launched' : 'Not launched'}</p>
    </div>
  );
};

export default RocketData;
