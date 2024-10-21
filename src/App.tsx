import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id: number,
  nome: string,
  descricao: string,
  preco: string,
  imagem: string
}

// Definindo o tipo para os dados do usuário
type UsuarioType = {
  id: number,
  nome: string,
  email: string,
  created_at: string,
  updated_at: string
}

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])
  //Uma função e uma condição para chamar a função
  // [] -> Significa que a condição de executar a função será ao carregar a página
  useEffect(() => {
    fetch("https://one022b-marketplace-ienr.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])
  // Requisição para a nova rota de usuários
  useEffect(() => {
    fetch("https://one022b-marketplace-ienr.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])
  return ( // JSX
    <>
      <div className="container-produtos">
        {produtos.map(prod => {
          return (
            <div className="produto-item">
              <h1>{prod.nome}</h1>
              <p>{prod.imagem}</p>
              <p>{prod.preco}</p>
              <p>{prod.descricao}</p>
            </div>
          )
        })}
      </div>
      <div className="container-usuarios">
        {usuarios.map(usua => {
          return (
            <div className="usuario-item">
              <h1>{usua.nome}</h1>
              <p>{usua.email}</p>
              <p>{usua.created_at}</p>
              <p>{usua.updated_at}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
