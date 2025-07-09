import React from "react";
import { NavLink } from "react-router";

export const Header = (): React.ReactElement => {
    return ( 
            <header className="header container">
        <NavLink to = "/" ><img src="img/logo.png" alt="Логотип" className="header__logo-img"/></NavLink>
        <nav className="header__nav">

            <ul className="header__list">
                <li className="header__list-item">
                    <NavLink to="/" className="header__item-link">О нас</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink to="/" className="header__item-link">ИТ-услуги</NavLink>
                    <img src="img/checkMark.png" alt="Подтверждение" className="header__item-img"/>
                </li>
                <li className="header__list-item">
                    <NavLink to="/" className="header__item-link">Портфолио</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink to="/cards" className="header__item-link">Карты</NavLink>
                </li>
            </ul>

            <button className="header__nav-button button-contact">Свяжитесь с нами</button>
        </nav>
    </header>
    )
}