import React from 'react';
import './Rocket.css';

const Rocket = ({ altitude }) => {
  return <div className="Rocket" style={{ bottom: `${altitude}px` }}></div>;
};

export default Rocket;
