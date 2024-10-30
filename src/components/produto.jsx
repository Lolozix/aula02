export default function Produto({produtos}){
    return(
       <main>
      <h1>Lista de Produtos</h1>
      <ul className={styles.produtos}>
        {produtos.map(produto => (
          <li key={produto.id}>
            <h3>{produto.title}</h3>
            <h4>{produto.description}</h4>
            <h4>Preço: ${produto.price}</h4>
            <img src={produto.image} alt={produto.title} width={100} />
          </li>
        ))}
      </ul>
      </main>
    )
}