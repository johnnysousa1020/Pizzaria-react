import "./Header.css"

function Header(){
    return(
        <header className="header">
            <div className="container">
                <h1 className="logo">Pizzaria Bella Napoli</h1>

                <nav>
                    <ul className="nav">
                        <li><a href="#pizzas">Pizzas</a></li>
                        <li><a href="#destaques">Destaques</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;