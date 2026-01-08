import casa from "./data/casa";
import "./Destaques.css"

function Destaques(){
    const destaques = casa.filter(item => item.destaque)

    return(
        <section className="destaques" id="destaques">
            <h2>Destaques da Casa</h2>

            <div className="destaques-grid">
                {destaques.map(item => (
                    <div className="destaques-card" key={item.id}>
                        <span className="selo-destaques">⭐ Mais Pedido</span>
                        
                        <img src={item.imagem} alt={item.nome} />

                        <div className="destaque-content">
                            <h3>{item.nome}</h3>
                            <p>{item.descricao}</p>
                            <span>{item.preco}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default Destaques;