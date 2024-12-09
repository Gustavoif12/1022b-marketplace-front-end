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
        fetch("https://one022b-marketplace-ienr.onrender.com/comics")
            .then(res => res.json())
            .then(setComics);
    }, []);

    return (
        <>
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

            <h1 className="titulo-lista">X - Comics</h1>

            <div className="container-comics">
                {comics.map(comic => (
                    <div key={comic.id} className="comic-item">
                        <h1>{comic.titulo}</h1>
                        <img src={comic.imagem} alt={comic.titulo} />
                        <div className="p-container">
                            <p><b>Autor:</b> {comic.autor}</p>
                            <p><b>Ano de Publicação:</b> {comic.ano_de_publicacao}</p>
                            <p><b>Editora:</b> {comic.editora}</p>
                            <p><b>Preço:</b> R$ {comic.preco}</p>
                            <p><b>Sinopse:</b> {comic.sinopse}</p>
                        </div>
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
