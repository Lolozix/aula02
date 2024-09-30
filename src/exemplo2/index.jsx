import { useEffect, useState } from "react";

export default function App() {
  
  const [buscarUsuario, setbuscarUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuarioo = async () => {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados = resposta.json();
        setBuscarUsuario(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Buscar Usuário</h1>
      <ul>
      {
        buscarUsuario.map((buscarUsuario)=>
        <div key={buscarUsuario.id}>
        <p>{buscarUsuario.title}</p>
        <p>{buscarUsuario.completed}</p>
          </div>
        )
      }
      </ul>
    </>
  );
}
