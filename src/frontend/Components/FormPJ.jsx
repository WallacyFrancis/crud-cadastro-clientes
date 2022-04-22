import React, { Component } from "react";
import { createData } from "../services/request";
import { validatePJ } from '../services/validacoes';

class FormPJ extends Component {
  constructor() {
    super();
    
    this.state = {
      personPJ: {
        pessoa: 'J',
        status: 'inativo',
        uf: 'AL'
      }
    }
  }

  hadleChange({ target }) {
    const element = target.name;
    const value = target.value;
    const { personPJ } = this.state;
    switch(element) {
      case 'raz-social':
        this.setState({ personPJ: { ...personPJ, razao_social: value } });
        break;
      case 'nome-fantasia':
        this.setState({ personPJ: { ...personPJ, nome: value } });
        break;
      case 'cpf-cnpj':
        this.setState({ personPJ: { ...personPJ, cpf_cnpj: value } });
        break;
      case 'status':
        this.setState({ personPJ: { ...personPJ, status: 'ativo' } });
        console.log(personPJ)
        break;
      case 'ie':
        this.setState({ personPJ: { ...personPJ, cpf_cnpj: value } });
        break;
      case 'im':
        this.setState({ personPJ: { ...personPJ, cpf_cnpj: value } });
        break;
      case 'email':
        this.setState({ personPJ: { ...personPJ, email: value } });
        break;
      case 'nome-responsavel':
        this.setState({ personPJ: { ...personPJ, nome_responsavel: value } });
        break;
      case 'cpf-responsavel':
        this.setState({ personPJ: { ...personPJ, cpf_responsavel: value } });
        break;
      case 'nasc-responsavel':
        this.setState({ personPJ: { ...personPJ, nascimento_responsavel: value } });
        break;
      case 'email-responsavel':
        this.setState({ personPJ: { ...personPJ, email_responsavel: value } });
        break;
      case 'telefone':
        this.setState({ personPJ: { ...personPJ, telefone: value } });
        break;
      case 'celular':
        this.setState({ personPJ: { ...personPJ, celular: value } });
        break;
      case 'cep':
        this.setState({ personPJ: { ...personPJ, cep: value } });
        break;
      case 'cidade':
        this.setState({ personPJ: { ...personPJ, cidade: value } });
        break;
      case 'uf':
        this.setState({ personPJ: { ...personPJ, uf: value } });
        break;
      case 'endereco':
        this.setState({ personPJ: { ...personPJ, logradouro: value } });
        break;
      case 'numero':
        this.setState({ personPJ: { ...personPJ, numero: value } });
        break;
      case 'complemento':
        this.setState({ personPJ: { ...personPJ, tipo_logradouro: value } });
        break;
      case 'bairro':
        this.setState({ personPJ: { ...personPJ, bairro: value } });
        break;
      case 'observacao':
        this.setState({ personPJ: { ...personPJ, observacao: value } });
        break;
      default:
        console.log('Objeto não identificado');
    }
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
            <input type="text" name="raz-social" onChange={ (e) => this.hadleChange(e) }/>
          </label>
          <label>
            Nome Fantasia
            <br />
            <input type="text" name="nome-fantasia" onChange={ (e) => this.hadleChange(e)}  />
          </label>
          <label>
            <input type="checkbox" name="status" onClick={ (e) => this.hadleChange(e)} />
            Ativo
          </label>
          <br />
          <label>
            Cnpj
            <br />
            <input type="text" name="cpf-cnpj" onChange={ (e) => this.hadleChange(e)} />
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
            <input type="text" name="ie" onChange={ (e) => this.hadleChange(e)} />
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
        </fieldset>
        <fieldset>
          <label>
            Nome do Responsável
            <br />
            <input type="text" name="nome-responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            CPF
            <br />
            <input type="text" name="cpf-responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Data de Nascimento
            <br />
            <input type="date" name="nasc-responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            Telefone
            <br />
            <input type="text" name="telefone" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Celular
            <br />
            <input type="text" name="celular" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            E-mail Responsavel 
            <br /> 
            <input type="email" name="email-responsavel" onChange={ (e) => this.hadleChange(e)} />
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
            <input type="text" name="endereco" onChange={ (e) => this.hadleChange(e)} />
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
            <input type="text" name="complemento" onChange={ (e) => this.hadleChange(e)} />
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
          <button>Cancelar</button>
        </div>
      </div>
    )
  }
}

export default FormPJ;
