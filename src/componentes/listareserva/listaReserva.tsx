import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './listaReserva.css'
import Header from "../header/header";

export default function ListaReserva() {
    const [reservas, setReservas] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://one022b-marketplace-ienr.onrender.com/reservas")
            .then(response => response.json())
            .then(data => setReservas(data));
    }, []);

    function handleExcluir(id: number) {
        fetch(`https://one022b-marketplace-ienr.onrender.com/reservas/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Reserva excluída com sucesso!");
                    setReservas(prevReservas => prevReservas.filter(reserva => reserva.id !== id));
                } else {
                    alert("Erro ao excluir reserva!");
                }
            });
    }

    return (
        <>
        <Header/>
            <h1>Comics Reservadas</h1>
            <div className="lista-reserva-container">
                <ul>
                    {reservas.map((reserva) => (
                        <li key={reserva.id}>
                            <h2>{reserva.nome_comprador}</h2>
                            <p>Comic: {reserva.titulo_comic}</p>
                            <p>Forma de Pagamento: {reserva.forma_pagamento}</p>
                            <p>Data da Reserva: {reserva.data_reserva}</p>
                            <div className="alterar-excluir-container">
                                <button onClick={() => handleExcluir(reserva.id)} className="botao-excluir">Excluir</button>
                                <Link to={`/alterar-reserva/${reserva.id}`} className="botao-alterar">Alterar</Link>
                            </div>
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
