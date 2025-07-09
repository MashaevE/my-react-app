import React from "react";

export const Footer = (): React.ReactElement => {
    return (
        <footer className="footer container">
        <div className="footer__content">
            <img src="img/Logo.png" alt="Логотип" className="footer__logo"/>

            <div className="footer__contacts">
                <div className="footer__contacts-block footer__contacts-number">
                    <h4 className="footer__info-number">+7 326 762 23 64</h4>
                    <img src="img/bxs_phone.png" alt="Телефон" className="footer__phone"/>
                </div>
                <div className="footer__contacts-block footer__contacts-email">
                    <h4 className="footer__info-email">info@cruisevoyage.com</h4>
                    <img src="img/ant-design_mail-filled.png" alt="Почта" className="footer__email"/>
                </div>
                <div className="footer__contacts-block footer__contacts-geo">
                    <h4 className="footer__info-geo">
                       Россия, Санкт-Петербург, Межевой канал, д.5
                    </h4>
                    <img src="img/material-symbols_location-on-rounded.png" alt="Геолокоцая" className="footer__geo"/>
                </div>
            </div>
            <div className="footer__info">
                <nav className="footer__nav-list">
                    <ul className="footer__list">
                        <li className="footer__list-item"><a href="#" className="footer__item-link">О нас</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__item-link">Сервисы</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__item-link">Портфолио</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__item-link">Отзывы</a></li>
                    </ul>
                </nav>
                <div className="footer__blank">
                    <h2 className="footer__title">Оставайтесь на связи</h2>
                    <form action="" className="footer__form">
                        <input type="text" name="email" className="footer__blank-email" placeholder="Адрес почты" required/>
                        <input type="button" value="Связаться с нами" className="footer__blank-button"/>
                    </form>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <p className="footer__botoom-copyright">&copy; 2022 Cruise Voyage All Rights Reserved.</p>
            <div className="footer__social__network-block">
                <img src="img/facebook.png" alt="Фейсбук" className="footer__social__network-img"/>
                <img src="img/instagram.png" alt="Инстаграм" className="footer__social__network-img"/>
                <img src="img/twitter.png" alt="Твиттер" className="footer__social__network-img"/>
            </div>
        </div>
    </footer>
    )
}