import React from 'react';

const AltitudeCounter = props => {
  return (
    <div
      style={{ display: 'inline-block', position: 'fixed', top: 0, right: 0 }}
    >
      {props.altitude}
    </div>
  );
};

export default AltitudeCounter;
