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
                    <img src="img/layner.png" alt="Лайнер" className="portfolio__img portfolio__layner-img" />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <img src="img/kitchen.png" alt="Кухня" className="portfolio__img portfolio__kitchen-img" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="img/room.png" alt="Комната" className="portfolio__img portfolio__room-img" />
                </SwiperSlide>
            </div>
        </Swiper>
    )
}