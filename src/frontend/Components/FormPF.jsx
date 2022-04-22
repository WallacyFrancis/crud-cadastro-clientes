import React, { Component } from "react";
import { createData } from "../services/request";

class FormPF extends Component {
  constructor() {
    super();

    this.state = {
      personPF: {
        pessoa: 'J',
        status: 'inativo',
        uf: 'AL'
      }
    }
  }

  hadleChange({ target }) {
    const element = target.name;
    const value = target.value;
    const { personPF } = this.state;
    switch(element) {
      case 'nome':
        this.setState({ personPF: { ...personPF, nome: value } });
        break;
      case 'nome-fantasia':
        this.setState({ personPF: { ...personPF, razao_social: value } });
        break;
      case 'cpf-cnpj':
        this.setState({ personPF: { ...personPF, cpf_cnpj: value } });
        break;
      case 'nasc':
      this.setState({ personPF: { ...personPF, data_nascimento: value } });
      break;
      case 'rg':
      this.setState({ personPF: { ...personPF, rg: value } });
      break;
      case 'email':
        this.setState({ personPF: { ...personPF, email: value } });
        break;
      case 'telefone':
        this.setState({ personPF: { ...personPF, telefone: value } });
        break;
      case 'celular':
        this.setState({ personPF: { ...personPF, celular: value } });
        break;
      case 'cep':
        this.setState({ personPF: { ...personPF, cep: value } });
        break;
      case 'cidade':
        this.setState({ personPF: { ...personPF, cidade: value } });
        break;
      case 'uf':
        this.setState({ personPF: { ...personPF, uf: value } });
        break;
      case 'endereco':
        this.setState({ personPF: { ...personPF, logradouro: value } });
        break;
      case 'numero':
        this.setState({ personPF: { ...personPF, numero: value } });
        break;
      case 'complemento':
        this.setState({ personPF: { ...personPF, complemento: value } });
        break;
      case 'bairro':
        this.setState({ personPF: { ...personPF, bairro: value } });
        break;
      case 'observacao':
        this.setState({ personPF: { ...personPF, observacao: value } });
        break;
      default:
        console.log('Objeto não identificado');
    }
  }

  async hadleClick(e) {
    try {
      e.preventDefault();
      const { personPF } = this.state;
      await createData('/clientes/cadastro', personPF);
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
            <input type="text" name="nome" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Apelido
            <input type="text" name="nome-fantasia" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <br />
          <label>
            CPF
            <input type="text" name="cpf-cnpj" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Data de Nascimento
            <input type="date" name="nasc" onChange={ (e) => this.hadleChange(e) } />
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
            <input type="text" name="rg" onChange={ (e) => this.hadleChange(e) } />
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
            <input type="email" name="email" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <br />
          <label>
            Telefone 
            <input type="text" name="telefone" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Celular 
            <input type="text" name="celular" onChange={ (e) => this.hadleChange(e) } />
          </label>
        </fieldset>
        <fieldset>
          <label>
            CEP
            <input type="text" name="cep" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Cidade
            <input type="text" name="cidade" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            UF
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
            <input type="text" name="endereco" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Número
            <input type="text" name="numero" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <br />
          <label>
            Complemento
            <input type="text" name="complemento" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <label>
            Bairro
            <input type="text" name="bairro" onChange={ (e) => this.hadleChange(e) } />
          </label>
          <br />
          <label>
            Observação
            <br />
            <textarea name="observacao" cols="30" rows="10" onChange={ (e) => this.hadleChange(e) } />
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

export default FormPF;

