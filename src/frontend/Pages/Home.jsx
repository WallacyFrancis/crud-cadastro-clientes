import React, { Component } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <header>
          <div>
            <h1>CRUD - CADASTRO DE CLIENTES</h1>
          </div>
          <div>
            <Link to="/clientes/cadastro">
              Criar Novo <AiOutlineUserAdd/>
            </Link>
            <Link to="/clientes">
              Ver Lista <AiOutlineOrderedList/>
            </Link>
          </div>
      </header>
    )
  }
}

export default Home;
