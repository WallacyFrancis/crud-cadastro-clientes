import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Pages/Form';
import Home from './Pages/Home';
import Clientes from './Pages/Clientes';
import FormUpdate from './Pages/FormUpdate';

class App extends Component {
  render() {
    return (
        <Routes>
            <Route path="/clientes/cadastro" element={<Form />} />
            <Route path="/clientes/atualizar/:id" element={<FormUpdate />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
  }
}

export default App;
