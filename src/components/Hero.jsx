import "./Hero.css"

function Hero(){
    return(
    <section className="hero">
        <div className="hero-content">
            <h2>A melhor pizza da cidade</h2>
            <p>Pizzas artesanais feitas no forno à lenha</p>
            <a href="#pizzas" className="btn">Ver Cardápio</a>
        </div>
    </section>
    )
}


export default Hero;