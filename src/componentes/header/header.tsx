import { Link } from 'react-router-dom';
import './Header.css'; // Certifique-se de que o CSS esteja importado corretamente

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lista-comic">Comics</Link></li>
          <li><Link to="/lista-reserva">Reservas</Link></li>
          <li><Link to="/cadastro-comic">Cadastrar Comic</Link></li>
          <li><Link to="/reserva-comic">Cadastrar Reserva</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
