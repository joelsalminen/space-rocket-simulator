import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { port } from './config.js';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const calculateLocation = t => {
  const a = 3;
  return 0.5 * a * t ** 2;
};

wss.on('connection', ws => {
  ws.on('message', message => {
    let t = 0;
    console.log(message);
    setInterval(() => {
      const location = calculateLocation(t);
      ws.send(location);
      t++;
    }, 1000);
    console.log('started');
  });

  ws.send('hello, im server');
});

server.listen(port, () => {
  console.log('started 3000');
});
