import React from "react";

export const About = (): React.ReactElement => {
    return (
        <section className="about container">
            <h1 className="about__title">О КОМПАНИИ</h1>
            <div className="about__comments">
                <h2 className="about__subtitle">
                    Идеальные морские круизы на любой вкус
                </h2>
                <p className="about__description">
                    Секрет успешного путешествия заключается в ярких, неповторимых
                    впечатлениях, которые остаются в памяти на долгие годы. И если
                    привычные отели и пансионаты редко способны удивить, то морские
                    круизы от компании <span className="about__description-span">Круиз Войаж</span> могут превратить ваш отдых в
                    незабываемое приключение, наполненное увлекательными 
                    мероприятиями, открытиями красот всевозможных уголков Земли и,
                     конечно же, чарующим релаксационным морским воздухом.
                </p>
                <div className="about__comments__history">
                    <div className="about__client">
                        <h4 className="about__client-numerus about-numerus">105<span
                            className="about__client-numerus-span about-numerus-span">+</span></h4>
                        <p className="about__client-description about__description-comments">Теплоходов</p>
                    </div>
                    <div className="about__business">
                        <h4 className="about__business-numerus about-numerus">100<span
                            className="about__business-numerus-span about-numerus-span">+</span></h4>
                        <p className="about__business-description about__description-comments">человек в <br/>команде</p>
                    </div>
                    <div className="about__memebers">
                        <h4 className="about__memebers-numerus about-numerus">575<span
                            className="about__memebers-numerus-span about-numerus-span">+</span></h4>
                        <p className="about__memebers-description about__description-comments">Положительных <br/>отзывов</p>
                    </div>
                </div>
            </div>
        </section>
    )
}