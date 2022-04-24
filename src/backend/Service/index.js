const Model = require('../Models')

const read = async () => {
  const data = await Model.read();
  return data;
};

const create = async (body) => {
  await Model.create(body);
};

const update = async (id, body) => {
  await Model.update(id, body);
}

const remove = async (id) => {
  await Model.remove(id);
}

module.exports =  {
  read,
  create,
  update,
  remove,
};
