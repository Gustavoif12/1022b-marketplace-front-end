import { FormEvent } from "react";

export default function CadastroProduto(){
    function handleForm(event:FormEvent){
        event.preventDefault();
    }
    return(
        <>
            <h1>Tela Cadastro Produtos</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" />
                </div>
                <div>
                    <label htmlFor="nome">nome</label>
                    <input type="text" name="nome" />
                </div>
                <div>
                    <label htmlFor="descricao">descricao</label>
                    <input type="text" name="descricao" />
                </div>
                <div>
                    <label htmlFor="preco">preço</label>
                    <input type="text" name="preco" />
                </div>
                <div>
                    <label htmlFor="imagem">imagem</label>
                    <input type="text" name="imagem" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}