import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

type ComicType = {
    id: number;
    titulo: string;
    autor: string;
    ano_de_publicacao: number;
    editora: string;
    sinopse: string;
    preco: string;
    imagem: string;
};

function App() {
    const [comics, setComics] = useState<ComicType[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/comics")
            .then(res => res.json())
            .then(setComics);
    }, []);

    return (
        <>
            <header className="site-header">
                <nav className="navigation">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/lista-comic">Comics</Link></li>
                        <li><Link to="/lista-reserva">Reservas</Link></li>
                        <li><Link to="/cadastro-comic">Cadastrar Comic</Link></li>
                        <li><Link to="/reserva-comic">Cadastrar Reserva</Link></li>
                    </ul>
                </nav>
            </header>

            <h2 className="titulo-lista">X - Comic</h2>

            <div className="container-comics">
                {comics.map(comic => (
                    <div key={comic.id} className="comic-item">
                        <h1>{comic.titulo}</h1>
                        <img src={comic.imagem} alt={comic.titulo} />
                        <p>Autor: {comic.autor}</p>
                        <p>Ano de Publicação: {comic.ano_de_publicacao}</p>
                        <p>Editora: {comic.editora}</p>
                        <p>Preço: {comic.preco}</p>
                        <p>Sinopse: {comic.sinopse}</p>
                        <Link to="/reserva-comic" className="botao-reservar">
                            Reservar
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
