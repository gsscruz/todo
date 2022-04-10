const express = require('express')

const { urlencoded } = require('express');

const app = express();

const path = require('path');

app.set('port', process.env.PORT || 8080);

const connected = require('./db/connection');
connected
 .then(() => {
  console.log('Connected to db');
  const server = app.listen(app.settings.port, () => {
   console.log('Connected to the server ', app.settings.port);
  })
 })

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(urlencoded({ extended: true }));

const router = require('./routes/index.js')

app.use('/api/v1', router)