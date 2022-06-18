import React, { useState, useEffect, useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import { ResponsiveImages } from "./SwiperSlides";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Slides = () => {

    // Set state depending on device screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
    const [isUltraWide, setIsUltraWide] = useState(window.innerWidth > 2000);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }

    }, [])

    const handleWindowResize = () => {
        setIsMobile(window.innerWidth < 800);
        setIsUltraWide(window.innerWidth > 2000);
    }



    return (

        <Swiper
        modules={[Pagination, Autoplay]}
        // autoplay={{
        //     delay: 12000,
        //     disableOnInteraction: true,
        // }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
            clickable: true,
            horizontalClass: 'swiper-bullet__wrapper',
            bulletElement: 'div',
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet--active'
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}

        >

            {ResponsiveImages.map((item, i) => {

                const SlideContent = () => {
                    return (
                        <div className={'container'}>
                            <div className={'container__wrapper'}>
                                <div className={'slide-content'}>
                                    <h3>{item.title}</h3>
                                    <p>{item.previewText}</p>
                                    <a className={'button button-primary'}
                                        href={item.link}>{item.buttonText}</a>
                                </div>
                            </div>
                        </div>
                    )
                }

                switch (item.type) {
                    //Video
                    case 'video':
                        return (
                            <SwiperSlide key={i}>
                                <video controls={false} autoPlay={true} muted={true} loop={true}>
                                    <source
                                        src={isUltraWide ? item.videoUltraWideMP4 : isMobile ? item.videoMobileMP4 : item.videoDesktopMP4}
                                        type="video/mp4"
                                    />
                                    <source
                                        src={isUltraWide ? item.videoUltraWideWEBM : isMobile ? item.videoMobileWEBM : item.videoDesktopWEBM}
                                        type="video/webm"
                                    />
                                    Your browser does not support videos.
                                </video>
                                <SlideContent />
                            </SwiperSlide>
                        )

                    // Image
                    case 'image':
                        return (
                            <SwiperSlide key={i}>
                                <picture>
                                    <source media="(min-width: 2000px)" srcSet={item.imgUltraWide} />
                                    <source media="(min-width: 900px)" srcSet={item.imgDesktop} />
                                    <source media="(min-width: 480px)" srcSet={item.imgMobile} />
                                    <img src={item.imgDesktop} alt="Standard" />
                                </picture>
                                <SlideContent />
                            </SwiperSlide>
                        )
                }
            }
            )
            }

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
