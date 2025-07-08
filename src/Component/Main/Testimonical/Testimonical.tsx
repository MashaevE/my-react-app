import React from "react";

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
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="card__content">
                            <img src="img/Adam.png" alt="Адам смитх" className="testimonial__icon-img" />
                            <h2 className="testimonial__text-name">Адам Смитх</h2>
                        </div>
                        <div className="card__content-block">
                            <p className="testimonial__card-description">“Морковка Lorem ipsum, расширенный конкурс среди
                                студентов.
                                Прическу следует запекать в микроволновке в виде горшочка. Разнообразный, но
                                производительный
                                продукт est, удобный для партнеров-потребителей. Элайджа, я отстранен от работы из-за
                                смерти
                                Лео перед лицом злого человека. Анализ массажа обязателен и прост. Элайджа, я отстранен
                                от
                                работы из-за смерти Лео перед лицом злого человека. Анализ массажа важен и прост
                                Анализ массажа обязателен и прост. Элайджа, Лео отстраняет меня от игры прямо в лицо.”
                            </p>
                        </div>
                    </div>


                    <div className="card-Mike">

                        <div className="swiper-slide">
                            <div className="card__content">
                                <img src="img/MikeIcon.png" alt="Майк" className="testimonial__icon-img" />
                                <h2 className="testimonial__text-name">Майк</h2>
                            </div>
                            <p className="testimonial__card-description">“Морковка Lorem ipsum, расширенный конкурс среди
                                студентов.
                                Прическу следует запекать в микроволновке в виде горшочка. Разнообразный, но
                                производительный
                                продукт est, удобный для партнеров-потребителей. Элайджа, я отстранен от работы из-за смерти
                                Лео перед лицом злого человека. Анализ массажа обязателен и прост. Элайджа, я отстранен от
                                работы из-за смерти Лео перед лицом злого человека. Анализ массажа важен и прост
                                Анализ массажа обязателен и прост. Элайджа, Лео отстраняет меня от игры прямо в лицо.”</p>
                        </div>
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