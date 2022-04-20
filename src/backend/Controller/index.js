import Service from "../Service";

class Controller {
  constructor(service) {
    service = Service;
  }

  async read() {
    const data = await this.service.read();
    return data;
  }
}

export default Controller;
