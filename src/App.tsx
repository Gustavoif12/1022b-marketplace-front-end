import { Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="app-container">
            <h1 className="app-title">Bem-vindo ao Sistema de Comics</h1>
            <p className="app-description">Escolha uma das opções abaixo para navegar pelo sistema:</p>
            <ul className="app-navigation">
                <li>
                    <Link to="/cadastro-comic" className="app-link">Cadastrar Comic</Link>
                </li>
                <li>
                    <Link to="/lista-comic" className="app-link">Listar Comics</Link>
                </li>
                <li>
                    <Link to="/reserva-comic" className="app-link">Cadastrar Reserva</Link>
                </li>
                <li>
                    <Link to="/lista-reserva" className="app-link">Listar Reservas</Link>
                </li>
            </ul>
        </div>
    );
}

export default App;
