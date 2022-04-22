import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { createData } from "../services/request";

class FormPFUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {}
    }
  }

  static propTypes = {
    cliente: PropTypes.shape({
      bairro: PropTypes.string,
      celular: PropTypes.string,
      celular_responsavel: PropTypes.string,
      cep: PropTypes.string,
      cidade: PropTypes.string,
      cnh: PropTypes.string,
      complemento: PropTypes.string,
      cpf_cnpj: PropTypes.string,
      cpf_responsavel: PropTypes.string,
      data_nascimento: PropTypes.string,
      email: PropTypes.string,
      email_responsavel: PropTypes.string,
      id: PropTypes.string,
      im: PropTypes.string,
      logradouro: PropTypes.string,
      nascimento_responsavel: PropTypes.string,
      nome: PropTypes.string,
      nome_responsavel: PropTypes.string,
      numero: PropTypes.string,
      observacao: PropTypes.string,
      pessoa: PropTypes.string,
      razao_social: PropTypes.string,
      rg: PropTypes.string,
      status: PropTypes.string,
      telefone: PropTypes.string,
      telefone_responseval: PropTypes.string,
      tipo_logradouro: PropTypes.string,
      uf: PropTypes.string,
    })
  }

  componentDidMount() {
    const { cliente } = this.props;
    this.setState({ person: cliente })
  }

  render() {
    const { person } = this.state;
    console.log(person);
    return(
      <div>
        Cheguei pessoa 
      </div>
    )
  }
}

export default FormPFUpdate;

