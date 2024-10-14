import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id: number,
  nome: string,
  descricao: string,
  preco: string,
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])

  //Uma função e uma condição para chamar a função
  // [] -> Significa que a condição de executar a função será ao carregar a página
  useEffect(() => {
    fetch("https://one022b-marketplace-ienr.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])
  return ( //JSX
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
    </>
  )
}

export default App
