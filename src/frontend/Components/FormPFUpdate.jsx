import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { updateData } from "../services/request";

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
    const { person } = this.state;
    const { name, value } = target
    this.setState({
      person: {
        ...person,
        [name]: value,
      }
    });
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
        <h3>Atualização de cadastro pessoa física</h3>
        <form>
          <fieldset>
            <label>
              Nome
              <br />
              <input type="text" name="nome" value={ person.nome } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Apelido
              <br />
              <input type="text" name="razao_social" value={ person.razao_social }  onChange={ (e) => this.hadleChange(e) } />
            </label>
            <br />
            <label>
              CPF
              <br />
              <input type="text" name="cpf_cnpj" value={ person.cpf_cnpj } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Data de Nascimento
              <br />
              <input type="date" name="data_nascimento" value={ person.data_nascimento } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Estado Cívil
              <br />
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
              <br />
              <input type="text" name="rg" value={ person.rg } onChange={ (e) => this.hadleChange(e) } />
            </label>
            <label>
              Orgão Emissor
              <br />
              <input type="text" name="org-emi" />
            </label>
            <label>
              UF
              <br />
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
              <br />
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
              <input type="text" name="logradouro" value={ person.logradouro } onChange={ (e) => this.hadleChange(e) } />
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
              <input type="text" name="tipo_logradouro" value={ person.tipo_logradouro } onChange={ (e) => this.hadleChange(e) } />
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
          <div className="form-cad-button">
            <button onClick={ (e) => this.handleClick(e) }>Atualizar</button>
            <button><Link to="/clientes">Cancelar</Link></button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormPFUpdate;

