import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './listaComic.css';

export default function ListaComic() {
    const [comics, setComics] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://one022b-marketplace-ienr.onrender.com/comics")
            .then(response => response.json())
            .then(data => setComics(data));
    }, []);

    return (
        <>
            <h1>Comics Cadastradas</h1>
            <div className="lista-comic-container">
                <ul>
                    {comics.map((comic) => (
                        <li key={comic.id}>
                            <h2>{comic.titulo}</h2>
                            <p>Autor: {comic.autor}</p>
                            <p>Ano de Publicação: {comic.ano_de_publicacao}</p>
                            <p>Editora: {comic.editora}</p>
                            <p>Preço: {comic.preco}</p>
                            <img src={comic.imagem} alt={comic.titulo} />
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/home" className="botao-voltar">
                Voltar para Home
            </Link>
        </>
    );
}
