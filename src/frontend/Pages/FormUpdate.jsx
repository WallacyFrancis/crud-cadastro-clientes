import React, { Component } from 'react';
import FormPFUpdate from '../Components/FormPFUpdate';
import FormPJUpdate from '../Components/FormPJUpdate';
import { requestData } from "../services/request";
import './App.css';

class FormUpdate extends Component {
  constructor() {
    super();

    this.state = {
      person: {}
    }
  }

  async requestClient() {
    const params = location.pathname;
    const id = params.substring(20);
    try {
      const data = await requestData('/clientes');
      const parseId = Number(id);
      const result = data.filter((cliente) => cliente.id === parseId);
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
      <div className="form-cad">
        <div>{ person.pessoa === 'J' && <FormPJUpdate cliente={ person } /> }</div>
        <div>{ person.pessoa === 'F' && <FormPFUpdate cliente={ person } /> }</div>
      </div>
    )
  }
}

export default FormUpdate;
