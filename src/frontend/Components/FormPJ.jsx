import React, { Component } from "react";

class FormPJ extends Component {
  render() {
    return(
      <div>
        <fieldset>
          <label>
            Razão Social
            <input type="text" name="raz-social"/>
          </label>
          <label>
            Nome Fantasia
            <input type="text" name="nome-fantasia" />
          </label>
          <label>
            <input type="checkbox" name="status" id="" />
            Ativo
          </label>
          <br />
          <label>
            Cnpj
            <input type="text" name="cpf/cnpj" />
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
            <input type="text" name="ie" />
          </label>
          <label>
            Insc. Municipal
            <input type="text" name="im" />
          </label>
          <label>
            E-mail 
            <input type="email" name="email" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Nome do Responsável
            <input type="text" name="nome-responsavel" />
          </label>
          <br />
          <label>
            CPF 
            <input type="text" name="cpf-responsavel"/>
          </label>
          <label>
            Data de Nascimento
            <input type="date" name="nasc-responsavel" />
          </label>
          <br />
          <label>
            Telefone 
            <input type="text" name="telefone" />
          </label>
          <label>
            Celular 
            <input type="text" name="celular" />
          </label>
          <label>
            E-mail Responsavel  
            <input type="email" name="email-responsavel" />
          </label>
          <br />
          <label>
            CEP
            <input type="text" name="cep" />
          </label>
          <label>
            Cidade
            <input type="text" name="cidade" />
          </label>
          <label>
            UF
            <select name="uf">
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
            <input type="text" name="endereco" />
          </label>
          <label>
            Número
            <input type="text" name="numero" />
          </label>
          <br />
          <label>
            Complemento
            <input type="text" name="complemento" />
          </label>
          <label>
            Bairro
            <input type="text" name="bairro" />
          </label>
          <br />
          <label>
            Observação
            <br />
            <textarea name="observacao" cols="30" rows="10"></textarea>
          </label>
        </fieldset>
        <div>
          <button>Salvar</button>
          <button>Cancelar</button>
        </div>
      </div>
    )
  }
}

export default FormPJ;
