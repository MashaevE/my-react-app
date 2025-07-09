import React from "react";
import { ReviewsSlider } from "../../Slider/ReviewsSlider/ReviewsSlider";

export const Reviews = (): React.ReactElement => {
    return (
        <section className="reviews container">
            <div className="reviews__content">
                <h1 className="reviews__title">Отзывы</h1>
                <p className="reviews__description">
                    Что расказывают наши клиенты о нас. Мы старались подобрать им круиз по их препочтениям. 
                    Вся наша компания выражает благодарность за доверие к нам.
                </p>
                <button className="reviews__button">Отзывы</button>
            </div>

            <ReviewsSlider/>

        </section>
    )
}