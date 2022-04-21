import React, { Component } from "react";
// import FormPJ from "../Components/FormPJ";
import FormPF from "../Components/FormPF";

class Form extends Component {
  render() {
    return(
      <form>
        <fieldset>
          <h3>Tipo de Pessoa</h3>
          <label>
            <input type="radio" name="pessoa" value="pf" checked /> Pessoa Fisica
          </label>
          <label>
            <input type="radio" name="pessoa" value="pj" /> Pessoa Juridica
          </label>
        </fieldset>
          <FormPF />
      </form>
    );
  }
}

export default Form;
