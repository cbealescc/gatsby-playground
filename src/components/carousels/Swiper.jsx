import React from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// import Swiper core and required modules
import {Pagination, Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Slides = () => {
    const baseUrl = 'https://collectingcars.imgix.net/'

    const responsiveImages = [
        {
            type: 'image',
            imgUltraWide: `${baseUrl}012042/IMG-3569.jpg`,
            imgDesktop: `${baseUrl}012042/30-ww-16.jpg`,
            imgMobile: `${baseUrl}012042/IMG-3590.jpg`,
            title: 'Supercar Sunday!',
            previewText: `If you're a Supercar fan, you'll love this!`,
            link: '/collection/supercar-sunday',
            buttonText: 'View Collection'
        },
        {
            type: 'image',
            imgUltraWide: `${baseUrl}012080/MMP-49.jpg`,
            imgDesktop: `${baseUrl}012080/MMP-1.jpg`,
            imgMobile: `${baseUrl}012080/MMP-66.jpg`,
            title: 'Air-Cooled Sunday!',
            previewText: `Over 200 air-cooled Porsches.`,
            link: '/collection/air-cooled-sunday',
            buttonText: 'View Collection'
        },
        {
            type: 'video',
            videoUrlMP4: `https://ak.picdn.net/shutterstock/videos/1062622186/preview/stock-footage-aerial-shot-of-electrical-car-driving-on-country-road-at-summer-evening-new-suv-vehicle-moving.mp4`,
            videoUrlWEBM: `https://ak.picdn.net/shutterstock/videos/1062622186/preview/stock-footage-aerial-shot-of-electrical-car-driving-on-country-road-at-summer-evening-new-suv-vehicle-moving.webm`,
            title: `Chris Harris' Column`,
            previewText: `"Working hard and wasting money on machinery you simply do not need is the very essence of loving cars".`,
            link: '/stories/chris-harris-column-week-2',
            buttonText: 'Read More'
        }
        // {
        //     type: 'video',
        //     videoUrlMP4: `https://images-collectingcars-com.s3.eu-west-2.amazonaws.com/editorial/videos/cc-best-offer-explained.mp4`,
        //     videoUrlWEBM: `https://images-collectingcars-com.s3.eu-west-2.amazonaws.com/editorial/videos/cc-best-offer-explained.mp4`
        // },
    ];

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            // autoplay={{
            //     delay: 12000,
            //     disableOnInteraction: true,
            // }}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{clickable: true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {responsiveImages.map((item, i) => {
                    if (item.type === 'video') {
                        return (
                            <SwiperSlide key={i}>
                                <video controls={false} autoPlay={true} muted={true} loop={true}>
                                    <source src={item.videoUrlMP4} type="video/mp4"/>
                                    <source src={item.videoUrlWEBM} type="video/webm"/>
                                    Your browser does not support videos.
                                </video>
                            </SwiperSlide>
                        )
                    } else {
                        return (
                            <SwiperSlide key={i}>
                                <picture>
                                    <source media="(min-width: 2000px)" srcSet={item.imgUltraWide}/>
                                    <source media="(min-width: 900px)" srcSet={item.imgDesktop}/>
                                    <source media="(min-width: 480px)" srcSet={item.imgMobile}/>
                                    <img src={item.imgDesktop} alt="Standard"/>
                                </picture>
                                <div className={'container'}>
                                    <div className={'container__wrapper'}>
                                        <div className={'slide-content'}>
                                            <h3>{item.title}</h3>
                                            <p>{item.previewText}</p>
                                        </div>
                                    </div>
                                </div>
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
        <Slides/>
    </>
)


export default SwiperCarousel
