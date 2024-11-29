import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://one022b-marketplace-ienr.onrender.com/comics")
            .then(resposta => resposta.json())
            .then(dados => setComics(dados));
    }, []);

    return (
        <>
            <header className="site-header">
                <nav className="navigation">
                    <ul>
                        <li><a onClick={() => navigate('/')}>Home</a></li>
                        <li><a onClick={() => navigate('/lista-comic')}>Comics</a></li>
                        <li><a onClick={() => navigate('/lista-reserva')}>Reservas</a></li>
                        <li><a onClick={() => navigate('/cadastro-comic')}>Cadastrar Comic</a></li>
                        <li><a onClick={() => navigate('/reserva-comic')}>Cadastrar Reserva</a></li>
                    </ul>
                </nav>
            </header>
            <h2 className="titulo-lista">Lista de Comics</h2>
            <div className="container-comics">
                {comics.map(comic => {
                    return (
                        <div key={comic.id} className="comic-item">
                            <h1>{comic.titulo}</h1>
                            <img src={comic.imagem} alt={comic.titulo} />
                            <p>Autor: {comic.autor}</p>
                            <p>Ano de Publicação: {comic.ano_de_publicacao}</p>
                            <p>Editora: {comic.editora}</p>
                            <p>Preço: {comic.preco}</p>
                            <p>Sinopse: {comic.sinopse}</p>
                            <button onClick={() => navigate('/reserva-comic')} className="botao-reservar">
                                Reservar
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default App;
