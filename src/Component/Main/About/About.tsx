import React from "react";

export const About = (): React.ReactElement => {
    return (
        <section className="about container">
            <h1 className="about__title">О КОМПАНИИ</h1>
            <div className="about__comments">
                <h2 className="about__subtitle">
                    Боль само по себе, боль ради достижения цели.
                    Прихожая рождает мудрую жизнь.
                </h2>
                <p className="about__description">
                    Я давно хотел, чтобы у меня была настоящая мама,
                    так что я почти уверен, что она ядовитый парень.
                    Слоеный грунт с шоколадом, банни и горшечный
                    банни - это больше, чем просто банни-банни.
                    Я ненавижу Лео Магнуса.
                </p>
                <div className="about__comments__history">
                    <div className="about__client">
                        <h4 className="about__client-numerus about-numerus">100<span
                                className="about__client-numerus-span about-numerus-span">+</span></h4>
                        <p className="about__client-description about__description-comments">Счастливые<br/> люди</p>
                    </div>
                    <div className="about__business">
                        <h4 className="about__business-numerus about-numerus">05<span
                                className="about__business-numerus-span about-numerus-span">+</span></h4>
                        <p className="about__business-description about__description-comments">Мы в<br/> бизнесе</p>
                    </div>
                    <div className="about__memebers">
                        <h4 className="about__memebers-numerus about-numerus">50<span
                                className="about__memebers-numerus-span about-numerus-span">+</span></h4>
                        <p className="about__memebers-description about__description-comments">Количество<br/> участников</p>
                    </div>
                </div>
            </div>
        </section>
    )
}