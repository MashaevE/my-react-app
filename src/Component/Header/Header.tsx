import React from "react";

export const Header = (): React.ReactElement => {
    return ( 
            <header className="header container">
        <img src="img/logo.png" alt="Логотип" className="header__logo-img"/>
        <nav className="header__nav">

            <ul className="header__list">
                <li className="header__list-item">
                    <a href="#" className="header__item-link">О нас</a>
                </li>
                <li className="header__list-item">
                    <a href="#" className="header__item-link">ИТ-услуги</a>
                    <img src="img/checkMark.png" alt="Подтверждение" className="header__item-img"/>
                </li>
                <li className="header__list-item">
                    <a href="#" className="header__item-link">Портфолио</a>
                </li>
            </ul>

            <button className="header__nav-button button-contact">Свяжитесь с нами</button>
        </nav>
    </header>
    )
}