import React from "react";
import { Header } from "../../Component/Header/Header";
import { NavLink } from "react-router";

export const NotFoundPage = (): React.ReactElement => {
    return (
        <>
            <Header />
            <div className="notFoundPage__content">
                <h1 className="notFoundPage__title">404. Страница не найдена</h1>
                <p className="notFoundPage__description">Такой страницы у нас нет</p>
                <button className="notFoundPage__button"><NavLink to = "/" className="notFoundPage__button-link">Вернуться</NavLink></button>
            </div>

        </>
    )
}