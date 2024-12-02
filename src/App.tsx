import { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

// Tipo para comics
type ComicType = {
  id: number;
  titulo: string;
  autor: string;
  ano_de_publicacao: string;
  editora: string;
  sinopse: string;
  preco: string;
  imagem: string;
};

function App() {
  const [comics, setComics] = useState<ComicType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Buscar comics
    fetch('http://localhost:8000/comics')
      .then((res) => res.json())
      .then((data) => setComics(data));
  }, []);

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <nav className="navigation">
          <ul>
            <li><a onClick={() => navigate('/')}>Home</a></li>
            <li><a onClick={() => navigate('/comics')}>Comics</a></li>
            <li><a onClick={() => navigate('/cadastro-comic')}>Cadastrar Comic</a></li>
            <li><a onClick={() => navigate('/cadastro-reserva')}>Cadastrar Reserva</a></li>
          </ul>
        </nav>
      </header>

      {/* Listagem de Comics */}
      <div className="comics-container">
        <h1 className='titulo-comics'>Comics</h1>
        <div className="comics-list">
          {comics.map((comic) => (
            <div key={comic.id} className="comic-item">
              <h3>{comic.titulo}</h3>
              <img src={comic.imagem} alt={comic.titulo} />
              <p>Autor: {comic.autor}</p>
              <p>Preço: {comic.preco}</p>
              <button onClick={() => navigate(`/cadastro-reserva?id=${comic.id}`)}>Reservar</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
