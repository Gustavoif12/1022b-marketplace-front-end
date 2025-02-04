import { useParams } from "react-router-dom";
import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./alterarReserva.css";
import Header from "../header/header";

function AlterarReserva() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [nomeComprador, setNomeComprador] = useState("");
    const [tituloComic, setTituloComic] = useState("");
    const [formaPagamento, setFormaPagamento] = useState("");
    const [dataReserva, setDataReserva] = useState("");

    useEffect(() => {
        fetch(`https://one022b-marketplace-ienr.onrender.com/reservas/${id}`)
            .then(res => res.json())
            .then(dados => {
                setNomeComprador(dados.nome_comprador);
                setTituloComic(dados.titulo_comic);
                setFormaPagamento(dados.forma_pagamento);
                setDataReserva(dados.data_reserva);
            });
    }, [id]);

    function handleForm(event: FormEvent) {
        event.preventDefault();

        const reserva = {
            nome_comprador: nomeComprador,
            titulo_comic: tituloComic,
            forma_pagamento: formaPagamento,
            data_reserva: dataReserva
        };

        fetch(`https://one022b-marketplace-ienr.onrender.com/reservas/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reserva)
        }).then(response => {
            if (response.status === 200) {
                alert("Reserva alterada com sucesso!");
                navigate("/");
            } else {
                alert("Erro ao alterar reserva!");
            }
        });
    }

    return (
        <main>
            <Header />
            <div className="alterar-reserva-container">
                <h1>Alterar Reserva {id}</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">ID</label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                        <label htmlFor="nomeComprador">Nome do Comprador</label>
                        <input type="text" name="nomeComprador" value={nomeComprador} onChange={(e) => setNomeComprador(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tituloComic">Título do Comic</label>
                        <input type="text" name="tituloComic" value={tituloComic} onChange={(e) => setTituloComic(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="formaPagamento">Forma de Pagamento</label>
                        <input type="text" name="formaPagamento" value={formaPagamento} onChange={(e) => setFormaPagamento(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="dataReserva">Data da Reserva</label>
                        <input type="text" name="dataReserva" value={dataReserva} onChange={(e) => setDataReserva(e.target.value)} />
                    </div>
                    <div>
                        <input type="submit" value="Alterar Reserva" />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default AlterarReserva;
