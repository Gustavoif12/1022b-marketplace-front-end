import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function ReservaComic() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [nomeComprador, setNomeComprador] = useState("");
    const [tituloComic, setTituloComic] = useState("");
    const [formaPagamento, setFormaPagamento] = useState("");
    const [dataReserva, setDataReserva] = useState("");

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei reservar comic");
        const reserva = {
            id: id,
            nome_comprador: nomeComprador,
            titulo_comic: tituloComic,
            forma_pagamento: formaPagamento,
            data_reserva: dataReserva
        };
        fetch("http://localhost:8000/reservas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reserva)
        }).then(response => {
            if (response.status === 201) {
                alert("Reserva feita com sucesso!");
                navigate("/home");
            } else {
                alert("Erro ao fazer reserva!");
            }
        });
    }

    function handleId(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value);
    }

    function handleNomeComprador(event: ChangeEvent<HTMLInputElement>) {
        setNomeComprador(event.target.value);
    }

    function handleTituloComic(event: ChangeEvent<HTMLInputElement>) {
        setTituloComic(event.target.value);
    }

    function handleFormaPagamento(event: ChangeEvent<HTMLInputElement>) {
        setFormaPagamento(event.target.value);
    }

    function handleDataReserva(event: ChangeEvent<HTMLInputElement>) {
        setDataReserva(event.target.value);
    }

    return (
        <>
            <h1>Reservar Comics</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="nomeComprador">Nome do Comprador</label>
                    <input type="text" name="nomeComprador" onChange={handleNomeComprador} />
                </div>
                <div>
                    <label htmlFor="tituloComic">Título do Comic</label>
                    <input type="text" name="tituloComic" onChange={handleTituloComic} />
                </div>
                <div>
                    <label htmlFor="formaPagamento">Forma de Pagamento</label>
                    <input type="text" name="formaPagamento" onChange={handleFormaPagamento} />
                </div>
                <div>
                    <label htmlFor="dataReserva">Data da Reserva</label>
                    <input type="text" name="dataReserva" onChange={handleDataReserva} />
                </div>
                <div>
                    <input type="submit" value="Reservar" />
                </div>
            </form>
        </>
    );
}
