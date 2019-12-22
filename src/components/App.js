import React, { useEffect, useState } from 'react';
import Map from './Map/Map.js';

const App = () => {
  const [altitude, setAltitude] = useState(0);
  const connectToSocket = () => {
    const url = 'ws://localhost:3000';
    const connection = new WebSocket(url);

    connection.onopen = () => {
      console.log('ws open');
      connection.send('hello');
    };

    connection.onmessage = e => {
      console.log(e.data);
      setAltitude(e.data);
    };

    connection.onerror = error => {
      console.log('ws error');
    };
  };

  useEffect(() => {
    connectToSocket();
  }, []);
  return <Map altitude={altitude} />;
};

export default App;
