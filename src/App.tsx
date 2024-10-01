import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [produtos, setProdutos] = useState([])

  //Uma função e uma condição para chamar a função
  // [] -> Significa que a condição de executar a função será ao carregar a página
  useEffect(() => {
    fetch("https://one022b-marketplace-ienr.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(data => setProdutos(data))
  }, [])
  return ( //JSX
    <>
      {console.log(produtos)}
    </>
  )
}

export default App
