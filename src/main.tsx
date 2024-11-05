import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './componentes/cadastroproduto/cadastroProduto.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cadastro",
    element: <div>Tela cadastro</div>,
  },
  {
    path: "/cadastro-produto",
    element: <CadastroProduto/>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
