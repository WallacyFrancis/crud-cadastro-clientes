const Model = require('../Models')

const read = () => {
  const data = Model.read();
  return data;
};

// const read = () => {
//   const data = 'Chegou aqui';
//   return data;
// }

module.exports =  {
  read,
};
