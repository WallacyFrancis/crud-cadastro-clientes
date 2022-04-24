const Controller = require('./Controller');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3301;
app.listen(PORT, () => {
  console.log(`Start port: ${PORT}`);
});

app.get('/clientes', Controller.read);
app.post('/clientes/cadastro', Controller.create);
app.put('/clientes/atualizar/:id', Controller.update);
app.delete('/clientes/:id', Controller.remove);