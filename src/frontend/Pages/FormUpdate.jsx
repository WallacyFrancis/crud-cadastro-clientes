import React, { Component } from 'react';
import FormPFUpdate from '../Components/FormPFUpdate';
import { requestData } from "../services/request";

class FormUpdate extends Component {
  constructor() {
    super();

    this.state = {
      person: {}
    }
  }

  async requestClient() {
    const params = location.pathname;
    const id = params.substring(20)
    try {
      const data = await requestData('/clientes');
      const result = data.filter((cliente) => cliente.id === id);
      this.setState({ person: result[0] });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.requestClient()
  }

  render() {
    const { person } = this.state;
    return (
      <div>{ person.pessoa === 'F' ? <FormPFUpdate cliente={ person } /> : 'Pessoa Jurídica' }</div>
    )
  }
}

export default FormUpdate;