import React, { useEffect } from 'react';

const App = () => {
  const a = () => {
    const url = 'ws://localhost:3000';
    const connection = new WebSocket(url);

    connection.onopen = () => {
      console.log('ws open');
      connection.send('hello');
    };

    connection.onmessage = e => {
      console.log(e.data);
    };

    connection.onerror = error => {
      console.log('ws error');
    };
  };

  useEffect(() => {
    a();
  });
  return <div>App</div>;
};

export default App;
