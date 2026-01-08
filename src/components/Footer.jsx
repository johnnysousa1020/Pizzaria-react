import "./Footer.css"

function Footer(){
    return(
        <footer className="footer" id="contato">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>Pizzaria Bella Napoli</h3>
                    <p>
                        Tradição italiana em cada fatia. Pizzas artesanais
                        feitas com ingredientes selecionados e muito sabor.
                    </p>
                </div>

                <div className="footer-info">
                    <h4>Contato</h4>
                    <p>Rua das Pizzas, 123 - São Paulo</p>
                    <p>📞 (11) 99999-9999</p>
                    <p>⏰ Seg a Dom - 18h às 23h</p>
                </div>
                <div className="footer-social">
                    <h4>Siga-nos</h4>
                    <div className="social-icons">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">WhatsApp</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    {new Date().getFullYear()} Pizzaria Bella Napoli.
                    Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}


export default Footer;