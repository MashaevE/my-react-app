import React from "react";
import { PortfolioSlider } from "../../Slider/PortfolioSlider/PortfolioSlider";

export const Portfolio = (): React.ReactElement => {
    return (
        <section className="portfolio container">
            <div className="portfolio__content">
                <h1 className="portfolio__title">Портфолио</h1>
                <p className="portfolio__description">Представляем вашему вниманию эксклюзивные туры и круизы.
                    Мы проделали большую работу, чтобы составить для вас уникальные и эксклюзивные предложения для вашего отдыха!</p>
                <button className="portfolio__button">Больше портфолий</button>
            </div>

            <PortfolioSlider/>

        </section>
    )
}