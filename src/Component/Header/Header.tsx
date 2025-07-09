import React, {useState} from "react";
import { NavLink } from "react-router";
import { Form } from "../Form/Form";

export const Header = (): React.ReactElement => {
        const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);
    return ( 
            <header className="header container">
        <NavLink to = "/" ><img src="img/Logo.png" alt="Логотип" className="header__logo-img"/></NavLink>
        <nav className="header__nav">

            <ul className="header__list">
                <li className="header__list-item">
                    <NavLink to="/" className="header__item-link">О нас</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink to="/" className="header__item-link">Сервисы</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink to="/" className="header__item-link">Портфолио</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink to="/cards" className="header__item-link">Карты</NavLink>
                </li>
            </ul>

            <button className="header__nav-button button-contact"  onClick={openForm}>Свяжитесь с нами</button>
        </nav>

        {isFormOpen && <Form onClose={closeForm} />}
    </header>
    )
}