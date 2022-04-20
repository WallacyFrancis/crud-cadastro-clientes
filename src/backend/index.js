const Controller = require('./Controller');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Start port: ${PORT}`);
});

app.get('/clientes', Controller.read);