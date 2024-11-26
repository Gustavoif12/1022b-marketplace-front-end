import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroComic() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [anoDePublicacao, setAnoDePublicacao] = useState("");
    const [editora, setEditora] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei cadastrar comics");
        const comic = {
            id: id,
            titulo: titulo,
            autor: autor,
            ano_de_publicacao: anoDePublicacao,
            editora: editora,
            sinopse: sinopse,
            preco: preco,
            imagem: imagem
        };
        fetch("http://localhost:8000/comics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comic)
        }).then(response => {
            if (response.status === 201) {
                alert("Comic cadastrada com sucesso");
                navigate("/");
            } else {
                alert("Erro ao cadastrar comic");
            }
        });
    }

    function handleId(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value);
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
        <>
            <h1>Cadastrar Comics</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name="titulo" onChange={handleTitulo} />
                </div>
                <div>
                    <label htmlFor="autor">Autor</label>
                    <input type="text" name="autor" onChange={handleAutor} />
                </div>
                <div>
                    <label htmlFor="anoDePublicacao">Ano de Publicação</label>
                    <input type="text" name="anoDePublicacao" onChange={handleAnoDePublicacao} />
                </div>
                <div>
                    <label htmlFor="editora">Editora</label>
                    <input type="text" name="editora" onChange={handleEditora} />
                </div>
                <div>
                    <label htmlFor="sinopse">Sinopse</label>
                    <input type="text" name="sinopse" onChange={handleSinopse} />
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input type="text" name="preco" onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem">Imagem</label>
                    <input type="text" name="imagem" onChange={handleImagem} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    );
}
