import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { port, acceleration } from './config.js';
import calculations from './utils/calculateAltitude.js';
import calculateSpeed from './utils/calculateSpeed';
const calculateAltitude = calculations(acceleration);

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sendAltitude = ws => {
  let t = 0;
  setInterval(() => {
    const altitude = calculateAltitude(t);
    const speed = calculateSpeed(altitude, t);
    ws.send(`${speed};${altitude}`);
    t++;
  }, 1000);
};

wss.on('connection', ws => {
  ws.on('message', message => {
    sendAltitude(ws);
  });
});

server.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
