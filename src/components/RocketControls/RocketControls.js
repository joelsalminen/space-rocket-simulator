import React, { useState } from 'react';
import './RocketControls.css';

const RocketControls = ({ launchRocket }) => {
  const [disabled, setDisabled] = useState(false);
  const onLaunchClick = () => {
    setDisabled(true);
    launchRocket();
  };
  return (
    <button
      className="RocketControls"
      onClick={onLaunchClick}
      disabled={disabled}
    >
      Launch
    </button>
  );
};

export default RocketControls;
