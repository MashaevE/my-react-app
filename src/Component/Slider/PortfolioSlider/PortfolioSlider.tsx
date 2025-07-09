import React from "react";
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const PortfolioSlider = (): React.ReactElement => {
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
                    <img src="img/game.png" alt="Игра" className="portfolio__img portfolio__game-img" />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <img src="img/bank.png" alt="Банк" className="portfolio__img portfolio__bank-img" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="img/soider.png" alt="Сайт" className="portfolio__img portfolio__soider-img" />
                </SwiperSlide>
            </div>
        </Swiper>
    )
}