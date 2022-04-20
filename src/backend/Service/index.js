const Model = require('../Models')

const read = async () => {
  const data = await Model.read();
  return data;
};

// const read = () => {
//   const data = 'Chegou aqui';
//   return data;
// }

module.exports =  {
  read,
};
