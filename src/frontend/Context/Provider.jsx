import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [person, setPerson] = useState('cpf');

  function handleChange({target: { value }}) {
    setPerson(value);
  }

  const contextValue = {
    handleChange,
    person,
  }

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;
