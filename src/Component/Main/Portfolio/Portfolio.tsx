import React from "react";

export const Portfolio = (): React.ReactElement => {
    return (
        <section className="portfolio container">
            <div className="portfolio__content">
                <h1 className="portfolio__title">Портфолио</h1>
                <p className="portfolio__description">Лорем ипсум - основная команда. Теперь это будет успокаивающим
                    элементом.</p>
                <button className="portfolio__button">Больше портфолий&#8594;</button>
            </div>

            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="img/game.png" alt="Игра" className="portfolio__img portfolio__game-img" />
                    </div>
                    <div className="swiper-slide">
                        <img src="img/bank.png" alt="Банк" className="portfolio__img portfolio__bank-img" />
                    </div>
                    <div className="swiper-slide">
                        <img src="img/soider.png" alt="Сайт" className="portfolio__img portfolio__soider-img" />
                    </div>

                </div>
                <div className="swiper-button">
                    <div className="swiper-button-prev">&lt;</div>
                    <div className="swiper-button-next">&gt;</div>
                </div>
            </div>
        </section>
    )
}