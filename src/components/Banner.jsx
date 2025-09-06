import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <div className="h-screen">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co.com/bRMd1z5s/photo-1621319332247-ce870cdad56c.jpg"/></SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/sdKq21rd/photo-1515940279136-2f419eea8051.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/p65TvQ6L/photo-1595303526913-c7037797ebe7.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/B5KG2BkN/photo-1505740494862-e7e49c099cf1.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/Qv8MhKrY/premium-photo-1679430106455-e5ab13a9007b.jpg"/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
