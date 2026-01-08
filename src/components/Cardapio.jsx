import menu from "./data/menu";
import "./Cardapio.css"
import { useState } from "react";

function Cardapio(){
    const [categoriaAtiva, setCategoriaAtiva] = useState("todos")

    const itensFiltrados =
    categoriaAtiva === "todos"
    ? menu
    : menu.filter(item => item.categoria === categoriaAtiva)

    return(
        <section className="cardapio" id="pizzas">
            <h2>Nosso Cardápio</h2>
            <div className="filtros">
                <button onClick={() => setCategoriaAtiva("todos")}>Todos</button>
                <button onClick={() => setCategoriaAtiva("salgada")}>Salgadas</button>
                <button onClick={() => setCategoriaAtiva("doce")}>Doces</button>
                <button onClick={() => setCategoriaAtiva("bebida")}>Bebidas</button>
            </div>

            <div className="cardapio-grid">
                {itensFiltrados.map(item => (
                    <div className="cardapio-card" key={item.id}>
                        {item.destaque && <span 
                        className={`selo-destaque ${item.categoria === "doce" ? "doce" : ""}`}>⭐ Destaque</span>}

                        <img src={item.imagem} alt={item.nome} />

                        <div className="cardapio-content">
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

export default Cardapio;