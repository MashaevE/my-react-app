import React from "react";
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ReviewsSlider = (): React.ReactElement => {
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
                        <img src="img/people/sveta.png" alt="Светлана" className="reviews__icon-img" />
                        <h2 className="reviews__text-name">Светлана</h2>
                    </div>
                    <div className="card__content-block">
                        <p className="reviews__card-description">“Отдыхали семьёй – получился идеальный отпуск! 🌴 Отель выбрали тихий. Еда
                            очень вкусная, на завтраке на шведском столе выбор был всегда. Всегда были
                            прекрасные морепродукты). Океан тёплый, вода прозрачная, пляж отличный: с
                            одной стороны риф, с другой – открытый океан. Всё на 5+! ✨ Впечатления
                            - супер!”
                        </p>
                    </div>
                </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="card__content">
                            <img src="img/people/irina-otzyv.png" alt="Ирина" className="reviews__icon-img" />
                            <h2 className="reviews__text-name">Ирина</h2>
                        </div>
                        <p className="reviews__card-description">“Круиз прошёл отлично!👏Лайнер супер!👍Чистота,комфортабельность ,вкусная
                            еда 🥘.На корабле отметила свой юбилей 🌸🌸🌸Такого дня рождения у меня
                            ещё не было!!!💃Это великолепно !👌🙌👍”</p>
                    </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                        <div className="card__content">
                            <img src="img/people/gena.png" alt="Генадий" className="reviews__icon-img" />
                            <h2 className="reviews__text-name">Геннадий</h2>
                        </div>
                        <p className="reviews__card-description">“Я бы хотел выразить огромную благодарность Бюро путешествий Круиз Войаж за
                            прекрасно организованное путешествие. Все было до мельчайших деталей
                            продумано, отличный выбор отелей и интересных экскурсий. Очень доволен!”</p>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="card__content">
                            <img src="img/people/alexey.png" alt="Алексей" className="reviews__icon-img" />
                            <h2 className="reviews__text-name">Алексей</h2>
                        </div>
                        <p className="reviews__card-description">“Бюро путешествий Круиз Войаж поразил меня своим профессионализмом. Мои
                            пожелания были учтены, а путешествие превзошло все ожидания. Я остался очень
                             доволен и рекомендую эту компанию всем своим знакомым.”</p>
                    </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                        <div className="card__content">
                            <img src="img/people/maria.png" alt="Мария" className="reviews__icon-img" />
                            <h2 className="reviews__text-name">Мария</h2>
                        </div>
                        <p className="reviews__card-description">“Очень хорошо отдохнули в последнюю неделю сентября в Турции. Море –
                            великолепное. Отель очень понравился: вид из номера – просто супер!
                            Прекрасные экскурсии, хорошая еда и развлечения на территории отеля. Спасибо
                            за отличный отдых!”</p>
                    </SwiperSlide>
                </div>
        </Swiper>
    )
}