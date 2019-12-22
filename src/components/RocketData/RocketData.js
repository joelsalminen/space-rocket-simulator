import React from 'react';
import './RocketData.css';

const RocketData = props => {
  return (
    <div className="RocketData">
      <p>Altitude: </p>
      {props.altitude}
    </div>
  );
};

export default RocketData;
