import './App.css';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineOrderedList } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>CRUD - CADASTRO DE CLIENTES</h1>
        </div>
      </header>
      <main>
        <button>Criar Novo <AiOutlineUserAdd/></button>
        <button>Ver Lista <AiOutlineOrderedList/></button>
      </main>
    </div>
  );
}

export default App;
