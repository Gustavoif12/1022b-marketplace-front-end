import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import CadastroComic from './componentes/cadastrocomic/cadastroComic.tsx'
import ListaComic from './componentes/listacomic/listaComic.tsx'
import ReservaComic from './componentes/reservacomic/reservaComic.tsx'
import ListaReserva from './componentes/listareserva/listaReserva.tsx'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/cadastro-comic",
    element: <CadastroComic />,
  },
  {
    path: "/lista-comic",
    element: <ListaComic />,
  },
  {
    path: "/reserva-comic",
    element: <ReservaComic />,
  },
  {
    path: "/lista-reserva",
    element: <ListaReserva />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
