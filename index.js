import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { port, a } from './config.js';
import calculations from './utils/calculateAltitude';
const calculateAltitude = calculations(a);

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  ws.on('message', message => {
    let t = 0;
    console.log(message);
    setInterval(() => {
      const location = calculateAltitude(t);
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
