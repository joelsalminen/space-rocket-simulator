import React from 'react';
import Block from '../Block/Block.js';
import Rocket from '../Rocket/Rocket.js';
import './Map.css';

const Map = ({ altitude }) => {
  return (
    <div className="Map">
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Rocket altitude={altitude} />
    </div>
  );
};

export default Map;
