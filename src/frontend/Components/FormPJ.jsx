import React, { Component } from "react";
import { createData } from "../services/request";
import { validatePJ } from '../services/validacoes';
import { Link } from 'react-router-dom';

class FormPJ extends Component {
  constructor() {
    super();
    
    this.state = {
      person: {
        pessoa: 'J',
        status: 'inativo',
        uf: 'AL'
      }
    }
  }

  hadleChange({ target }) {
    const { person } = this.state;
    const { name, value } = target
    this.setState({
      person: {
        ...person,
        [name]: value
      }
    });
  }

  async hadleClick(e) {
    e.preventDefault();
    const { personPJ } = this.state;
    try {
      if (!validatePJ(personPJ)) {
        return;
      } else {
        await createData('/clientes/cadastro', personPJ);
        window.location.href = 'http://localhost:3000/clientes'
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return(
      <div>
        <fieldset>
          <label>
            Razão Social
            <br />
            <input type="text" name="nome" onChange={ (e) => this.hadleChange(e) }/>
          </label>
          <label>
            Nome Fantasia
            <br />
            <input type="text" name="razao_social" onChange={ (e) => this.hadleChange(e)}  />
          </label>
          <label>
            <input type="checkbox" name="status" onClick={ (e) => this.hadleChange(e)} />
            Ativo
          </label>
          <br />
          <label>
            Cnpj
            <br />
            <input type="text" name="cpf_cnpj" onChange={ (e) => this.hadleChange(e)} />
          </label>
          Contribuinte
          <label className="label-rad">
            <input type="radio" name="contribuinte" checked />Sim
          </label>
          <label className="label-rad">
            <input type="radio" name="contribuinte" />Não
          </label>
          <br />
          <label>
            Insc. Estadual
            <br />
            <input type="text" name="ie"/>
          </label>
          <label>
            Insc. Municipal
            <br />
            <input type="text" name="im" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            E-mail
            <br />
            <input type="email" name="email" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            Telefone
            <br />
            <input type="email" name="telefone" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Celular
            <br />
            <input type="email" name="celular" onChange={ (e) => this.hadleChange(e)} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Nome do Responsável
            <br />
            <input type="text" name="nome_responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            CPF
            <br />
            <input type="text" name="cpf_responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Data de Nascimento
            <br />
            <input type="date" name="nascimento_responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            Telefone
            <br />
            <input type="text" name="telefone_responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Celular
            <br />
            <input type="text" name="celular_responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            E-mail Responsavel 
            <br /> 
            <input type="email" name="email_responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            CEP
            <br />
            <input type="text" name="cep" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Cidade
            <br />
            <input type="text" name="cidade" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            UF
            <br />
            <select name="uf" onChange={ (e) => this.hadleChange(e)} >
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
            <input type="text" name="logradouro" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Número
            <br />
            <input type="text" name="numero" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            Complemento
            <br />
            <input type="text" name="tipo_logradouro" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Bairro
            <br />
            <input type="text" name="bairro" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            Observação
            <br />
            <textarea name="observacao" cols="60" rows="10" onChange={ (e) => this.hadleChange(e)} />
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

export default FormPJ;
