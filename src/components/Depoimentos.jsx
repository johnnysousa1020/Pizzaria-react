import depoimentos from "./data/depoimentos";
import "./Depoimentos.css"

function Depoimentos(){
    return(
        <section className="depoimentos">
            <h2>O que nossos clientes dizem</h2>

            <div className="depoimentos-grid">
                {depoimentos.map(item => (
                    <div className="depoimentos-card" key={item.id}>
                        <p className="texto">"{item.texto}"</p>
                        <span className="nome">{item.nome}</span>
                        <div className="estrelas">
                            {"⭐".repeat(item.estrelas)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Depoimentos;