import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { port } from './config.js';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  ws.on('message', message => {
    setInterval(() => {
      ws.send('hello back');
    }, 1000);
    console.log('started');
  });

  ws.send('hello, im server');
});

server.listen(port, () => {
  console.log('started 3000');
});
