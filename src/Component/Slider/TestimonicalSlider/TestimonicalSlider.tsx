import React from "react";
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TestimonicalSlider = (): React.ReactElement => {
    return (
        <Swiper
            className="swiper"
            modules={[Scrollbar]}
            spaceBetween={50}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
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
                </SwiperSlide>
                <div className="card-Mike">
                    <SwiperSlide className="swiper-slide">
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
                    </SwiperSlide>
                </div>
            </div>
        </Swiper>
    )
}