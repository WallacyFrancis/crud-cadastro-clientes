const clientes = require('../API');

const read = () => {
  const data = clientes;
  return data;
};

const create = (obj) => {
  const result = {
    id: clientes.length + 1,
    ...obj,
  }
  clientes.push(result);
  return clientes[clientes.length - 1];
}

module.exports =  {
  read,
  create,
};