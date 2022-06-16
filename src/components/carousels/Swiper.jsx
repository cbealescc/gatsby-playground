import * as React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const baseUrl = 'https://image.shutterstock.com/shutterstock/photos/'

const Slides = () => {

    const images = [
        `${baseUrl}1923184661/display_1500/stock-photo-kharkiv-ukraine-september-audi-rs-sportback-at-beautiful-sunset-1923184661.jpg`,
        `${baseUrl}1334183546/display_1500/stock-photo-ashgabad-turkmenistan-blue-sports-car-bmw-m-on-a-winding-mountain-road-1334183546.jpg`,
        `${baseUrl}1995199103/display_1500/stock-photo-aachen-germany-march-arranged-street-shot-of-an-modern-porsche-gt-rs-1995199103.jpg`
    ]

    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {images.map((item, i) => (
                <SwiperSlide key={i}>
                    <img src={item} />
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

const SwiperCarousel = () => (
    <>
        <p>Swiper.js</p>
        <Slides />
    </>
)



export default SwiperCarousel
