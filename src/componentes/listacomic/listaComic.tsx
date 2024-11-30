import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListaComic() {
    const [comics, setComics] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/comics")
            .then(response => response.json())
            .then(data => setComics(data));
    }, []);

    return (
        <>
            <h1>Comics Cadastradas</h1>
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
            <Link to="/home">Voltar para Home</Link>
        </>
    );
}