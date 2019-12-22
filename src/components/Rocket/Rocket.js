import React from 'react';
import './Rocket.css';

const Rocket = ({ altitude }) => {
  const rocketStyle = { bottom: `${altitude}px` };
  return <div className="Rocket" style={rocketStyle}></div>;
};

export default Rocket;
