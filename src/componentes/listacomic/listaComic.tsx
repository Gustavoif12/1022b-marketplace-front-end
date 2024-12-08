import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './listaComic.css';

export default function ListaComic() {
    const [comics, setComics] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/comics")
            .then(response => response.json())
            .then(data => setComics(data));
    }, []);
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
                            <img src={comic.imagem} alt={comic.titulo} />
                            <p><b>Autor:</b> {comic.autor}</p>
                            <p><b>Ano de Publicação:</b> {comic.ano_de_publicacao}</p>
                            <p><b>Editora:</b> {comic.editora}</p>
                            <p><b>Preço:</b> R$ {comic.preco}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/" className="botao-voltar">
                Voltar para Home
            </Link>
        </>
    );
}
