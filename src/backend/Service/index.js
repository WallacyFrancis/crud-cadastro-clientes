const Model = require('../Models')

const read = () => {
  const data = Model.read();
  return data;
};

const create = (obj) => {
  const result = Model.create(obj);
  return result;
};

const update = (id, obj) => {
  const data = Model.update(id, obj);
  return data;
}

const remove = (id) => {
  const data = Model.remove(id);
  return data;
}

module.exports =  {
  read,
  create,
  update,
  remove,
};
