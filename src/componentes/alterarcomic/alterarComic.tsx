import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './alterarComic.css';
import Header from "../header/header";

function AlterarComic() {
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://one022b-marketplace-ienr.onrender.com/comics/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setTitulo(dados.titulo);
                setAutor(dados.autor);
                setAnoDePublicacao(dados.ano_de_publicacao);
                setEditora(dados.editora);
                setSinopse(dados.sinopse);
                setPreco(dados.preco);
                setImagem(dados.imagem);
            });
    }, [id]);

    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [anoDePublicacao, setAnoDePublicacao] = useState("");
    const [editora, setEditora] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei alterar comic");
        const comic = {
            titulo,
            autor,
            ano_de_publicacao: anoDePublicacao,
            editora,
            sinopse,
            preco,
            imagem
        };
        fetch(`https://one022b-marketplace-ienr.onrender.com/comics/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comic)
        }).then(response => {
            if (response.status === 200) {
                alert("Comic alterada com sucesso!");
                navigate("/");
            } else {
                alert("Erro ao alterar comic!");
            }
        });
    }

    function handleTitulo(event: ChangeEvent<HTMLInputElement>) {
        setTitulo(event.target.value);
    }
    function handleAutor(event: ChangeEvent<HTMLInputElement>) {
        setAutor(event.target.value);
    }
    function handleAnoDePublicacao(event: ChangeEvent<HTMLInputElement>) {
        setAnoDePublicacao(event.target.value);
    }
    function handleEditora(event: ChangeEvent<HTMLInputElement>) {
        setEditora(event.target.value);
    }
    function handleSinopse(event: ChangeEvent<HTMLInputElement>) {
        setSinopse(event.target.value);
    }
    function handlePreco(event: ChangeEvent<HTMLInputElement>) {
        setPreco(event.target.value);
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>) {
        setImagem(event.target.value);
    }

    return (
        <main>
          <Header/>
            <div className="alterar-comic-container">
                <h1>Alterar Comic {id}</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">ID</label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name="titulo" value={titulo} onChange={handleTitulo} />
                    </div>
                    <div>
                        <label htmlFor="autor">Autor</label>
                        <input type="text" name="autor" value={autor} onChange={handleAutor} />
                    </div>
                    <div>
                        <label htmlFor="anoDePublicacao">Ano de Publicação</label>
                        <input type="text" name="anoDePublicacao" value={anoDePublicacao} onChange={handleAnoDePublicacao} />
                    </div>
                    <div>
                        <label htmlFor="editora">Editora</label>
                        <input type="text" name="editora" value={editora} onChange={handleEditora} />
                    </div>
                    <div>
                        <label htmlFor="sinopse">Sinopse</label>
                        <input type="text" name="sinopse" value={sinopse} onChange={handleSinopse} />
                    </div>
                    <div>
                        <label htmlFor="preco">Preço</label>
                        <input type="text" name="preco" value={preco} onChange={handlePreco} />
                    </div>
                    <div>
                        <label htmlFor="imagem">Imagem</label>
                        <input type="text" name="imagem" value={imagem} onChange={handleImagem} />
                        {imagem && <img className="imagem-previa-upload" src={imagem} alt="Prévia da imagem" />}
                    </div>
                    <div>
                        <input type="submit" value="Alterar" />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default AlterarComic;
