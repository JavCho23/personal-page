import logo from "../assets/svg/logo.svg"

import "../assets/css/Header.css"

function Header() {
    return (
        <header className="header">
            <a href="/">
                <img className="header__logo" src={logo} alt="{ Jav }" />
            </a>

            <div className="header__items">
                <h2 className="header__item">Habilidades</h2>
                <h2 className="header__item">Trabajo</h2>
                <h2 className="header__item">Contacto</h2>
            </div>
        </header>
    )
}

export default Header
