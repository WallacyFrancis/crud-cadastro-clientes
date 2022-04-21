const Controller = require('./Controller');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Start port: ${PORT}`);
});

app.get('/clientes', Controller.read);
app.post('/clientes/cadastro', Controller.create);
app.put('/clientes/:id', Controller.update);
app.delete('/clientes/:id', Controller.remove);