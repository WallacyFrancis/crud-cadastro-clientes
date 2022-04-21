import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';

class Clientes extends Component {
  render() {
    return(
      <div>
        <header>
          <Link to="/clientes/cadastro">
            Criar Novo <AiOutlineUserAdd/>
          </Link>
        </header>
      </div>
    )
  }
}

export default Clientes;
