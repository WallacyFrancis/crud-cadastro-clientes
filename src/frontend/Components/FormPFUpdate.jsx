// import { createData } from "../services/request";
import PropTypes from 'prop-types';

function FormPFUpdate({ nome }) {
  
  return(
    <div>
      Cheguei pessoa física { nome }
    </div>
  )
}

FormPFUpdate.propTypes = {
  nome: PropTypes.string, 
};

export default FormPFUpdate;

