import { useState } from "react";
import FormPJ from "../Components/FormPJ";
import FormPF from "../Components/FormPF";

function Form() {
  const [person, setPerson] = useState('pj');

  const handleClick = ({ target: { value } }) => {
    setPerson(value);
  }

  return(
      <form>
        <fieldset>
          <h3>Tipo de Pessoa</h3>
          <label>
            <input
              type="radio"
              name="pessoa"
              value="pj"
              onClick={ (e) => handleClick(e) }
            /> Pessoa Juridica
          </label>
          <label>
            <input
              type="radio"
              name="pessoa"
              value="pf"
              onClick={ (e) => handleClick(e) }
            /> Pessoa Fisica
          </label>
        </fieldset>
        { person !== 'pj' ? <FormPF /> : <FormPJ /> }
      </form>
  );
}

export default Form;
