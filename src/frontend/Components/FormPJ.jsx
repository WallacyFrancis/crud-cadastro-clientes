import React, { Component } from "react";
import { createData } from "../services/request";

class FormPJ extends Component {
  constructor() {
    super();
    this.state = {
      personPf: {
        pessoa: 'J',
        status: 'inativo',
        uf: 'AL'
      }
    }
  }

  hadleChange({ target }) {
    const element = target.name;
    const value = target.value;
    const { personPf } = this.state;
    switch(element) {
      case 'raz-social':
        this.setState({ personPf: { ...personPf, razao_social: value } });
        break;
      case 'nome-fantasia':
        this.setState({ personPf: { ...personPf, nome: value } });
        break;
      case 'cpf-cnpj':
        this.setState({ personPf: { ...personPf, cpf_cnpj: value } });
        break;
      case 'status':
        this.setState({ personPf: { ...personPf, status: 'ativo' } });
        console.log(personPf)
        break;
      case 'ie':
        this.setState({ personPf: { ...personPf, cpf_cnpj: value } });
        break;
      case 'im':
        this.setState({ personPf: { ...personPf, cpf_cnpj: value } });
        break;
      case 'email':
        this.setState({ personPf: { ...personPf, email: value } });
        break;
      case 'nome-responsavel':
        this.setState({ personPf: { ...personPf, nome_responsavel: value } });
        break;
      case 'cpf-responsavel':
        this.setState({ personPf: { ...personPf, cpf_responsavel: value } });
        break;
      case 'nasc-responsavel':
        this.setState({ personPf: { ...personPf, nascimento_responsavel: value } });
        break;
      case 'email-responsavel':
        this.setState({ personPf: { ...personPf, email_responsavel: value } });
        break;
      case 'telefone':
        this.setState({ personPf: { ...personPf, telefone: value } });
        break;
      case 'celular':
        this.setState({ personPf: { ...personPf, celular: value } });
        break;
      case 'cep':
        this.setState({ personPf: { ...personPf, cep: value } });
        break;
      case 'cidade':
        this.setState({ personPf: { ...personPf, cidade: value } });
        break;
      case 'uf':
        this.setState({ personPf: { ...personPf, uf: value } });
        break;
      case 'endereco':
        this.setState({ personPf: { ...personPf, logradouro: value } });
        break;
      case 'numero':
        this.setState({ personPf: { ...personPf, numero: value } });
        break;
      case 'complemento':
        this.setState({ personPf: { ...personPf, complemento: value } });
        break;
      case 'bairro':
        this.setState({ personPf: { ...personPf, bairro: value } });
        break;
      case 'observacao':
        this.setState({ personPf: { ...personPf, observacao: value } });
        break;
      default:
        console.log('Objeto não identificado');
    }
  }

  async hadleClick(e) {
    try {
      e.preventDefault();
      const { personPf } = this.state;
      await createData('/clientes/cadastro', personPf);
      window.location.href = 'http://localhost:3000/clientes'
      console.log(personPf);
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
            <input type="text" name="raz-social" onChange={ (e) => this.hadleChange(e) }/>
          </label>
          <label>
            Nome Fantasia
            <input type="text" name="nome-fantasia" onChange={ (e) => this.hadleChange(e)}  />
          </label>
          <label>
            <input type="checkbox" name="status" onClick={ (e) => this.hadleChange(e)} />
            Ativo
          </label>
          <br />
          <label>
            Cnpj
            <input type="text" name="cpf-cnpj" onChange={ (e) => this.hadleChange(e)} />
          </label>
          Contribuinte
          <label>
            <input type="radio" name="contribuinte" checked />Sim
          </label>
          <label>
            <input type="radio" name="contribuinte" />Não
          </label>
          <br />
          <label>
            Insc. Estadual
            <input type="text" name="ie" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Insc. Municipal
            <input type="text" name="im" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            E-mail 
            <input type="email" name="email" onChange={ (e) => this.hadleChange(e)} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Nome do Responsável
            <input type="text" name="nome-responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            CPF 
            <input type="text" name="cpf-responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Data de Nascimento
            <input type="date" name="nasc-responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            Telefone 
            <input type="text" name="telefone" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Celular 
            <input type="text" name="celular" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            E-mail Responsavel  
            <input type="email" name="email-responsavel" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            CEP
            <input type="text" name="cep" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Cidade
            <input type="text" name="cidade" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            UF
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
            <input type="text" name="endereco" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Número
            <input type="text" name="numero" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            Complemento
            <input type="text" name="complemento" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <label>
            Bairro
            <input type="text" name="bairro" onChange={ (e) => this.hadleChange(e)} />
          </label>
          <br />
          <label>
            Observação
            <br />
            <textarea name="observacao" cols="30" rows="10" onChange={ (e) => this.hadleChange(e)} />
          </label>
        </fieldset>
        <div>
          <button onClick={ (e) => this.hadleClick(e) }>Salvar</button>
          <button>Cancelar</button>
        </div>
      </div>
    )
  }
}

export default FormPJ;
