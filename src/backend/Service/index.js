const Model = require('../Models')

const read = () => {
  const data = Model.read();
  return data;
};

const create = (obj) => {
  const result = Model.create(obj);
  return result;
}
module.exports =  {
  read,
  create,
};
