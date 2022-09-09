import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Slides = () => {
    const baseUrl = 'https://image.shutterstock.com/shutterstock/photos/'

    const responsiveImages = [
        {
            imgDesktop: `${baseUrl}1923184661/display_1500/stock-photo-kharkiv-ukraine-september-audi-rs-sportback-at-beautiful-sunset-1923184661.jpg`,
            imgMobile: `${baseUrl}1901132377/display_1500/stock-photo-side-view-of-woman-sitting-on-sofa-at-home-using-mobile-application-on-cellphone-chatting-on-1901132377.jpg`,
            imgAlt: `${baseUrl}1804289950/display_1500/stock-photo--d-rendering-of-billboards-and-advertisement-signs-at-modern-buildings-in-capital-city-with-light-1804289950.jpg`
        },
        {
            imgDesktop: `${baseUrl}2000612981/display_1500/stock-photo-photorealistic-d-illustration-of-the-futuristic-city-in-the-style-of-cyberpunk-girl-in-a-2000612981.jpg`,
            imgMobile: `${baseUrl}1949691562/display_1500/stock-photo-wadi-disah-also-known-as-wadi-qaraqir-is-a-kilometer-long-canyon-running-through-the-jebel-1949691562.jpg`,
            imgAlt: `${baseUrl}1842774100/display_1500/stock-photo-wild-camping-in-the-lofoten-islands-camping-tent-among-mountains-sunset-over-camping-spot-behind-1842774100.jpg`
        }
    ];

    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {responsiveImages.map((item, i) => (
                <SwiperSlide key={i}>

                    <picture>
                        <source media="(min-width: 900px)" srcset={item.imgDesktop} />
                        <source media="(min-width: 480px)" srcset={item.imgMobile} />
                        <img src={item.imgAlt} alt="IfItDoesntMatchAnyMedia" />
                    </picture>

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
