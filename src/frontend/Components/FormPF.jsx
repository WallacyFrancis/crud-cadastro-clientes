import React, { Component } from "react";

class FormPF extends Component {
  render() {
    return(
      <div>
        <fieldset>
          <label>
            Nome
            <input type="text" name="raz-social"/>
          </label>
          <label>
            Apelido
            <input type="text" name="nome-fantasia" />
          </label>
          <br />
          <label>
            CPF
            <input type="text" name="cpf/cnpj" />
          </label>
          <label>
            Data de Nascimento
            <input type="date" name="nasc" />
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
            <input type="text" name="rg" />
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
            <input type="email" name="email" />
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
        </fieldset>
        <fieldset>
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

export default FormPF;

