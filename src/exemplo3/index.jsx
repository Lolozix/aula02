import { useEffect, useState } from "react";

export default function App() {
  
  const [receberUsuario, setreceberUsuario] = useState([]);

  useEffect(() => { 

    const receberUsuario = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
         
    }
    receberUsuario()
  }, []);

  return (
    <>
      <h1>Receber Usuário</h1>
      <ul>
      {
        receberUsuario.map((receberUsuario)=>
            <div key={receberUsuario.id}>
              <p>{receberUsuario.title}</p>
              <p>{receberUsuario.first}</p>
              <p>{receberUsuario.last}</p>
          </div>
        )
      }
      </ul>
    </>
  );
}
