import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { updateData } from "../services/request";

class FormPJUpdate extends Component {
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
      case 'raz-social':
        this.setState({ person: { ...person, razao_social: value } });
        break;
      case 'nome-fantasia':
        this.setState({ person: { ...person, nome: value } });
        break;
      case 'cpf-cnpj':
        this.setState({ person: { ...person, cpf_cnpj: value } });
        break;
      case 'status':
        this.setState({ person: { ...person, status: 'ativo' } });
        console.log(person)
        break;
      case 'ie':
        this.setState({ person: { ...person, cpf_cnpj: value } });
        break;
      case 'im':
        this.setState({ person: { ...person, cpf_cnpj: value } });
        break;
      case 'email':
        this.setState({ person: { ...person, email: value } });
        break;
      case 'nome-responsavel':
        this.setState({ person: { ...person, nome_responsavel: value } });
        break;
      case 'cpf-responsavel':
        this.setState({ person: { ...person, cpf_responsavel: value } });
        break;
      case 'nasc-responsavel':
        this.setState({ person: { ...person, nascimento_responsavel: value } });
        break;
      case 'email-responsavel':
        this.setState({ person: { ...person, email_responsavel: value } });
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
        this.setState({ person: { ...person, complemento: value } });
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

  async handleClick(e) {
    e.preventDefault();
    const { person } = this.state
    try {
      await updateData(`/clientes/atualizar/${person.id}`, person);
      window.location.href = 'http://localhost:3000/clientes';
    } catch (e) {
      console.log(e);
    }
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
        <h3>Atualização de cadastro pessoa jurídica</h3>
        <form>
          <fieldset>
            <label>
                Nome Fantasia
                <br />
                <input type="text" name="nome-fantasia" value={ person.nome }  onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Razão Social
              <br />
              <input type="text" name="raz-social" value={ person.razao_social } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              CNPJ
              <br />
              <input type="text" name="rg" value={ person.cpf_cnpj } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              Insc. Municipal
              <br />
              <input type="text" name="rg" value={ person.im } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              E-mail
              <br />
              <input type="email" name="email" value={ person.email } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              Telefone
              <br />
              <input type="text" name="telefone" value={ person.telefone } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Celular
              <br />
              <input type="text" name="celular" value={ person.celular } onChange={ (e) => this.hadleChange(e) } />
            </label>
          </fieldset>
          <fieldset>
            <label>
                Nome do Responsável
                <br /> 
                <input type="text" name="nome-responsavel" value={ person.celular } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
                CPF
                <br />
                <input type="text" name="cpf-responsavel" value={ person.cpf_responsavel } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Data de Nascimento
              <br />
              <input type="date" name="nasc-responsavel" value={ person.nascimento_responsavel } onChange={ (e) => this.hadleChange(e)} />
            </label>
            <br />
            <label>
                Telefone
                <br />
                <input type="text" name="telefone" value={ person.telefone_responseval } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
                Celular
                <br />
                <input type="text" name="celular" value={ person.celular_responsavel } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
                E-mail
                <br />
                <input type="text" name="email" value={ person.email_responsavel } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              CEP
              <br />
              <input type="text" name="cep" value={ person.cep } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Cidade
              <br />
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
              <br />
              <input type="text" name="endereco" value={ person.logradouro } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Número
              <br />
              <input type="text" name="numero" value={ person.numero } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              Complemento
              <br />
              <input type="text" name="complemento" value={ person.tipo_logradouro } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Bairro
              <br />
              <input type="text" name="bairro" value={ person.bairro } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              Observação
              <br />
              <textarea name="observacao" cols="60" rows="10" value={ person.observacao } onChange={ (e) => this.hadleChange(e) } />
            </label>
          </fieldset>
          <div className="form-cad-button" >
            <button onClick={ (e) => this.handleClick(e) }>Atualizar</button>
            <button><Link to="/clientes">Cancelar</Link></button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormPJUpdate;
