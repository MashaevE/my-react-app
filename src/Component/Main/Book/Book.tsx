import React from "react";

export const Book = (): React.ReactElement =>{
    return (
        <section className="book container">
            <div className="book__content">
                <div className="book__content-subtitle">
                    <h4 className="book__subtitle">Записаться</h4>
                    <div className="book__content-strip"></div>
                </div>
                <h1 className="book__title">Запишитесь на встречу с нами</h1>
                <p className="book__description">
                    Лучшие направления для путешествий на самых новых теплоходах — «Evrima» и «Evropa 2». Эксклюзивные программы, концептуальная кухня «Родные берега» и премиальный сервис. Подарите себе и своим близким незабываемые эмоции.
                </p>
            </div>
            <div className="book__form">
                <form action="" className="modal-form">
                    <input className="form-input form__text-input" type="text" name="name" placeholder="Имя" required/>
                    <input className="form-input form__text-input" type="text" name="email" placeholder="Почта" required/>
                    <input className="form-input form__text-input" type="text" name="phone"
                        placeholder="Телефон" required/>
                    <textarea className="form-input form__area-input" name="message" id="message"
                        placeholder="Расскажите нам о предпочтениях, для подборки лучших круизов (необязательно)"></textarea>
                    <input type="submit" value="Предоставить" className="form__button-input"/>
                </form>
            </div>
            <div className="book__block-red"></div>
        </section>
    )
}