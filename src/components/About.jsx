import pizza from "../assets/pizza-sobre.jpg"
import "./About.css"

function About(){
    return(
        <section id="sobre" className="about">
            <div className="container-about">
                <div className="about-text">
                    <h2>Sobre a Pizzaria</h2>

                    <p>
                        A <strong>Bella Napoli</strong> nasceu da paixão pela verdadeira
                        pizza italiana. Utilizamos ingredientes selecionados, massas de
                        fermentação natural e receitas tradicionais para oferecer uma 
                        experiência única.
                    </p>

                    <p>
                        Nosso ambiente é acolhedor, perfeito para reunir familia e amigos,
                        sempre com atendimento de qualidade e muito sabor.
                    </p>
                </div>

                <div className="about-image">
                    <img src={pizza} alt="Pizza artesanal" />
                </div>
            </div>
        </section>
    )
}

export default About;