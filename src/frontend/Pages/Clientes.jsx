import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { BiArrowBack } from 'react-icons/bi';
import { requestData, deleteData } from "../services/request";
import './App.css';

class Clientes extends Component {
  constructor() {
    super();

    this.state = {
      clientes: [],
    }

  }

  async requesClients() {
    try {
      const data = await requestData('/clientes');
      this.setState({ clientes: data });
    } catch (e) {
      console.log(e);
    }
  }

  async deleteClient(id) {
    try {
      const data = await deleteData(`/clientes/${id}`);
      this.setState({ clientes: data });
    } catch (e) {
      console.log(e)
    }
  }

  filterSearch({ target: { value } }) {
    const { clientes } = this.state;
    const filter = clientes.filter((cliente) => cliente.nome.includes(value));
    this.setState({ clientes: filter });
  }

  updateClient(e, id) {
    e.preventDefault();
    window.location.href(`http://clocalhost:3000/clientes/atualizar/${id}`)
  }

  componentDidMount() {
    this.requesClients();
  }
 
  render() {
    const { clientes } = this.state;
    return(
      <div className='list'>
        <header className='list-header'>
          <Link to="/clientes/cadastro">
            Criar Novo <AiOutlineUserAdd/>
          </Link>
          <Link to="/">Voltar<BiArrowBack /></Link>
          <input type="text" name="search" placeholder="Pesquisar" onChange={ (e) => this.filterSearch(e) } />
        </header>
        <div>
         <table className='list-table'>
          <tr>
              <th>ID</th>
              <th>Nome/Razão Social</th>
              <th>CPF/CNPJ</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Celular</th>
              <th colSpan="3"></th>
            </tr>
            { 
              clientes.length !== 0 ? clientes.map((cliente) => (
                <tr key={ cliente.id }>
                  <td>{ cliente.id }</td>
                  <td>{ cliente.nome }</td>
                  <td>{ cliente.cpf_cnpj }</td>
                  <td>{ cliente.email }</td>
                  <td>{ cliente.telefone }</td>
                  <td>{ cliente.celular }</td>
                  <td><Link to={ `/clientes/atualizar/${cliente.id}` } ><BsFillPencilFill/></Link></td>
                  <td onClick={() => this.deleteClient(cliente.id)} ><RiDeleteBack2Line className='deleteItem' /></td>
                </tr>
              ))  : 'Carregando...'  
            }
         </table>
        </div>
      </div>
    );
  }
}

export default Clientes;
