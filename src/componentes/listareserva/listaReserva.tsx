import { useEffect, useState } from "react";

export default function ListaReserva() {
    const [reservas, setReservas] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://one022b-marketplace-ienr.onrender.com/reservas")
            .then(response => response.json())
            .then(data => setReservas(data));
    }, []);

    return (
        <>
            <h1>Listar Reservas</h1>
            <ul>
                {reservas.map((reserva) => (
                    <li key={reserva.id}>
                        <h2>{reserva.nome_comprador}</h2>
                        <p>Comic: {reserva.titulo_comic}</p>
                        <p>Forma de Pagamento: {reserva.forma_pagamento}</p>
                        <p>Data da Reserva: {reserva.data_reserva}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
