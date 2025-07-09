import React from "react";
import { PortfolioSlider } from "../../Slider/PortfolioSlider/PortfolioSlider";

export const Portfolio = (): React.ReactElement => {
    return (
        <section className="portfolio container">
            <div className="portfolio__content">
                <h1 className="portfolio__title">Портфолио</h1>
                <p className="portfolio__description">Лорем ипсум - основная команда. Теперь это будет успокаивающим
                    элементом.</p>
                <button className="portfolio__button">Больше портфолий</button>
            </div>

            <PortfolioSlider/>

        </section>
    )
}