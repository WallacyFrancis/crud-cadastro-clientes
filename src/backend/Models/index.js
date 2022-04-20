const fs = require('fs');
const db = require('../clientes.json');

class Model {
  async read() {
    const data = await fs.readFileSync(db);
    console.log(JSON.parse(data));
    return JSON.parse(data);
  }
}

export default Model;