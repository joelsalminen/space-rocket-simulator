import React from 'react';
import './AltitudeCounter.css';

const AltitudeCounter = props => {
  return (
    <div className="AltitudeCounter">
      <p>Rocket altitude: </p>
      {props.altitude}
    </div>
  );
};

export default AltitudeCounter;
