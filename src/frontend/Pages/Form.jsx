import React, { Component } from "react";

class Form extends Component {
  render() {
    return(
      <form>
        <fieldset>
          <h3>Tipo de Pessoa</h3>
          <label>
            <input type="radio" name="cpf" /> Pessoa Fisica
          </label>
          <label>
            <input type="radio" name="cnpj" /> Pessoa Juridica
          </label>
        </fieldset>
        <fieldset>

        </fieldset>
      </form>
    );
  }
}

export default Form;
