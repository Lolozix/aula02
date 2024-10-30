import { useState, useEffect } from "react";
import Produto from "../components/produto";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        const buscarProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                if (!resposta.ok) throw new Error("Não foi possivel encontrar a API");
                const dados = await resposta.json();
                setProdutos(dados);
            } 
            catch (erro) {
                console.error("Não foi possivel encontrar esse produto :(", erro);
                alert("Não foi possivel encontrar esse produto :(");
            }
        };
        buscarProdutos();
    }, []);
    
    return (
        <main>
            <Produto produtos={produtos} />
        </main>
    );
}
