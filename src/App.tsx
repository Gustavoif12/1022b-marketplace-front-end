import { useEffect, useState } from 'react';
import './App.css';

type ComicType = {
  id: number;
  titulo: string;
  autor: string;
  ano_de_publicacao: string;
  editora: string;
  sinopse: string;
  preco: string;
  imagem: string;
};

type ReservaType = {
  id: number;
  nome_comprador: string;
  titulo_comic: string;
  forma_pagamento: string;
  data_reserva: string;
};

function App() {
  const [comics, setComics] = useState<ComicType[]>([]);
  const [reservas, setReservas] = useState<ReservaType[]>([]);

  useEffect(() => {
    fetch("https://one022b-marketplace-ienr.onrender.com/comics")
      .then(resposta => resposta.json())
      .then(dados => setComics(dados));
  }, []);

  useEffect(() => {
    fetch("https://one022b-marketplace-ienr.onrender.com/reservas")
      .then(resposta => resposta.json())
      .then(dados => setReservas(dados));
  }, []);

  return (
    <>
      <h2 className="titulo-lista">Lista de Comics</h2>
      <div className="container-comics">
        {comics.map(comic => {
          return (
            <div key={comic.id} className="comic-item">
              <h1>{comic.titulo}</h1>
              <img src={comic.imagem} alt={comic.titulo} />
              <p>Autor: {comic.autor}</p>
              <p>Ano de Publicação: {comic.ano_de_publicacao}</p>
              <p>Editora: {comic.editora}</p>
              <p>Preço: {comic.preco}</p>
              <p>Sinopse: {comic.sinopse}</p>
            </div>
          );
        })}
      </div>

      <h2 className="titulo-lista">Lista de Reservas</h2>
      <div className="container-reservas">
        {reservas.map(reserva => {
          return (
            <div key={reserva.id} className="reserva-item">
              <h1>{reserva.nome_comprador}</h1>
              <p>Comic: {reserva.titulo_comic}</p>
              <p>Forma de Pagamento: {reserva.forma_pagamento}</p>
              <p>Data da Reserva: {reserva.data_reserva}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
