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

  hadleChange({ target }) {
    const element = target.name;
    const value = target.value;
    const { person } = this.state;
    switch(element) {
      case 'nome':
        this.setState({ person: { ...person, nome: value } });
        break;
      case 'nome-fantasia':
        this.setState({ person: { ...person, razao_social: value } });
        break;
      case 'cpf-cnpj':
        this.setState({ person: { ...person, cpf_cnpj: value } });
        break;
      case 'nasc':
      this.setState({ person: { ...person, data_nascimento: value } });
      break;
      case 'rg':
      this.setState({ person: { ...person, rg: value } });
      break;
      case 'email':
        this.setState({ person: { ...person, email: value } });
        break;
      case 'telefone':
        this.setState({ person: { ...person, telefone: value } });
        break;
      case 'celular':
        this.setState({ person: { ...person, celular: value } });
        break;
      case 'cep':
        this.setState({ person: { ...person, cep: value } });
        break;
      case 'cidade':
        this.setState({ person: { ...person, cidade: value } });
        break;
      case 'uf':
        this.setState({ person: { ...person, uf: value } });
        break;
      case 'endereco':
        this.setState({ person: { ...person, logradouro: value } });
        break;
      case 'numero':
        this.setState({ person: { ...person, numero: value } });
        break;
      case 'complemento':
        this.setState({ person: { ...person, tipo_logradouro: value } });
        break;
      case 'bairro':
        this.setState({ person: { ...person, bairro: value } });
        break;
      case 'observacao':
        this.setState({ person: { ...person, observacao: value } });
        break;
      default:
        console.log('Objeto não identificado');
    }
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicou')
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
        <h3>Atualização de usuário</h3>
        <form>
          <fieldset>
            <label>
              Nome
              <input type="text" name="nome" value={ person.nome } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Apelido
              <input type="text" name="nome-fantasia" value={ person.razao_social }  onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              CPF
              <input type="text" name="cpf-cnpj" value={ person.cpf_cnpj } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Data de Nascimento
              <input type="date" name="nasc" value={ person.data_nascimento } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Estado Cívil
              <select name="status">
                <option value="s">Solteiro(a)</option>
                <option value="c">Casado(a)</option>
                <option value="d">Divorciado(a)</option>
                <option value="v">Viúvo(a)</option>
              </select>
            </label>
            <br />
            <label>
              RG/RNE
              <input type="text" name="rg" value={ person.rg } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Orgão Emissor
              <input type="text" name="org-emi" />
            </label>
            <label>
              UF
              <select name="uf-rg">
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </label>
            <br />
            <label>
              E-mail 
              <input type="email" name="email" value={ person.email } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              Telefone 
              <input type="text" name="telefone" value={ person.telefone } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Celular 
              <input type="text" name="celular" value={ person.celular } onChange={ (e) => this.hadleChange(e) } />
            </label>
          </fieldset>
          <fieldset>
            <label>
              CEP
              <input type="text" name="cep" value={ person.cep } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Cidade
              <input type="text" name="cidade" value={ person.cidade } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              UF
              <select name="uf" value={ person.uf } onChange={ (e) => this.hadleChange(e) } >
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </label>
            <br />
            <label>
              Endereço
              <input type="text" name="endereco" value={ person.logradouro } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Número
              <input type="text" name="numero" value={ person.numero } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              Complemento
              <input type="text" name="complemento" value={ person.tipo_logradouro } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Bairro
              <input type="text" name="bairro" value={ person.bairro } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              Observação
              <br />
              <textarea name="observacao" cols="30" rows="10" value={ person.observacao } onChange={ (e) => this.hadleChange(e) } />
            </label>
          </fieldset>
          <button onClick={ (e) => this.handleClick(e) }>Atualizar</button>
          <button>Cancelar</button>
        </form>
      </div>
    )
  }
}

export default FormPFUpdate;

