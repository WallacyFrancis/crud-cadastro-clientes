import React, { Component } from "react";
import FormPJ from "../Components/FormPJ";
import FormPF from "../Components/FormPF";
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './App.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      person: 'pj',
    }
  }

  handleClick({ target: { value } }) {
    this.setState({ person: value });
  }

  componentDidMount() {
    const inputPf = document.getElementById('pj');
    inputPf.checked = true;
  }

  render() {
    const { person } = this.state;
    return(
      <div className="form-cad">
        <Link to="/clientes">Voltar<BiArrowBack /></Link>
        <form>
          <fieldset>
            <h3>Tipo de Pessoa</h3>
            <label>
              <input
                type="radio"
                name="pessoa"
                value="pj"
                id='pj'
                onClick={ (e) => this.handleClick(e) }
              /> Pessoa Juridica
            </label>
            <label>
              <input
                type="radio"
                name="pessoa"
                value="pf"
                onClick={ (e) => this.handleClick(e) }
              /> Pessoa Fisica
            </label>
          </fieldset>
          { person !== 'pj' ? <FormPF /> : <FormPJ /> }
        </form>
      </div>
  );
  }
}

export default Form;
