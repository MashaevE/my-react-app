import React from "react";
import { TestimonicalSlider } from "../../Slider/TestimonicalSlider/TestimonicalSlider";

export const Testimonical = (): React.ReactElement => {
    return (
        <section className="testimonial container">
            <div className="testimonial__content">
                <h1 className="testimonial__title">Рекомендации</h1>
                <p className="testimonial__description">
                    Лорем ипсум - основная команда. Теперь это будет успокаивающим элементом.
                </p>
                <button className="testimonial__button">Исследовать</button>
            </div>

            <TestimonicalSlider/>

        </section>
    )
}