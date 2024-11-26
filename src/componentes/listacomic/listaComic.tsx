import { useEffect, useState } from "react";

export default function ListaComic() {
    const [comics, setComics] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://one022b-marketplace-ienr.onrender.com/comics")
            .then(response => response.json())
            .then(data => setComics(data));
    }, []);

    return (
        <>
            <h1>Listar Comics</h1>
            <ul>
                {comics.map((comic) => (
                    <li key={comic.id}>
                        <h2>{comic.titulo}</h2>
                        <p>Autor: {comic.autor}</p>
                        <p>Ano de Publicação: {comic.ano_de_publicacao}</p>
                        <p>Editora: {comic.editora}</p>
                        <p>Preço: {comic.preco}</p>
                        <img src={comic.imagem} alt={comic.titulo} width={100} />
                    </li>
                ))}
            </ul>
        </>
    );
}
