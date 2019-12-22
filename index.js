import express from 'express';
import { port } from './config.js';

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  );
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next();
});

app.get('/api/hello', (req, res) => {
  res.send('hi');
});

app.listen(port, () => {
  console.info(`Running on ${port}...`);
});
