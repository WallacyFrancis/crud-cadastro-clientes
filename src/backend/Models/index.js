const fs = require('fs');

const read = async () => {
  const data = await fs.readFileSync('../clientes.json', 'utf-8');
  const result = JSON.parse(data);
  return result;
};

module.exports =  {
  read,
};