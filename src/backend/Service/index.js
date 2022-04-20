import Model from "../Models";

class Service {
  constructor(model) {
    model = Model;
  };

  async read() {
    const data = await this.model.read();
    return data;
  }
}

export default Service;

