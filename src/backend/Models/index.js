const fs = require('fs');
const clientes = require('../API');

const read = () => {
  const data = clientes;
  return data;
};

const create = (obj) => {
  const result = clientes.push(obj);
  return result;
}

module.exports =  {
  read,
  create,
};