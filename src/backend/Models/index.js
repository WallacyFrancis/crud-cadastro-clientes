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
};

const update = (id, obj) => {
  clientes[id - 1] = { id, ...obj };
  return clientes[id - 1];
};

const remove = (id) => {
  const data = clientes.filter((cliente) => cliente.id !== id);
  return data;
}

module.exports =  {
  read,
  create,
  update,
  remove,
};