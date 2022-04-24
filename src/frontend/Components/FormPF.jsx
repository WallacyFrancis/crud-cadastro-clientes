import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createData } from '../services/request';

class FormPF extends Component {
  constructor() {
    super();

    this.state = {
      person: {
        bairro: "",
        celular: "",
        celular_responsavel: "",
        cep: "",
        cidade: "",
        cnh: "",
        cpf_cnpj: "",
        cpf_responsavel: "",
        data_nascimento: "",
        email: "",
        email_responsavel: "",
        im: "",
        logradouro: "",
        nascimento_responsavel: "",
        nome: "",
        nome_responsavel: "",
        numero: "",
        observacao: "",
        pessoa: "F",
        razao_social: "",
        rg: "",
        status: "solteiro(a)",
        telefone: "",
        telefone_responsavel: "",
        tipo_logradouro: "",
        uf: "AL",
      }
    }
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

  async hadleClick(e) {
    e.preventDefault();
    const { person } = this.state;
    try {
      await createData('/clientes/cadastro', person);
      window.location.href = 'http://localhost:3000/clientes'
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return(
      <div>
        <fieldset>
          <label>
            Nome
            <br />
            <input type="text" name="nome" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Apelido
            <br />
            <input type="text" name="razao_social" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <br />
          <label>
            CPF
            <br />
            <input type="text" name="cpf_cnpj" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Data de Nascimento
            <br />
            <input type="date" name="data_nascimento" onChange={ (e) => this.hadleChange(e) } />
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
            CNH
            <br />
            <input type="text" name="cnh" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            RG/RNE
            <br />
            <input type="text" name="rg" onChange={ (e) => this.hadleChange(e) } />
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
            <input type="email" name="email" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <br />
          <label>
            Telefone
            <br />
            <input type="text" name="telefone" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Celular
            <br />
            <input type="text" name="celular" onChange={ (e) => this.hadleChange(e) } />
          </label>
        </fieldset>
        <fieldset>
          <label>
            CEP
            <br />
            <input type="text" name="cep" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Cidade
            <br />
            <input type="text" name="cidade" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            UF
            <br />
            <select name="uf" onChange={ (e) => this.hadleChange(e) } >
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
            <input type="text" name="logradouro" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Número
            <br />
            <input type="text" name="numero" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <br />
          <label>
            Complemento
            <br />
            <input type="text" name="tipo_logradouro" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Bairro
            <br />
            <input type="text" name="bairro" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <br />
          <label>
            Observação
            <br />
            <textarea name="observacao" cols="60" rows="10" onChange={ (e) => this.hadleChange(e) } />
          </label>
        </fieldset>
        <div className="form-cad-button">
          <button onClick={ (e) => this.hadleClick(e) }>Salvar</button>
          <Link to="/clientes">Cancelar</Link>
        </div>
      </div>
    )
  }
}

export default FormPF;

