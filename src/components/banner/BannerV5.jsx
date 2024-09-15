"use client"
import React from 'react';
import BannerV5Data from '@/assets/jsonData/banner/BannerV5Data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import SingleBannerV5 from './SingleBannerV5';

const BannerV5 = () => {
    return (
        <>
            <div className="banner-area navigation-icon-solid navigation-between-bottom navigation-custom-large overflow-hidden text-light banner-style-five">
                <div className="banner-slide-counter">
                    <Swiper
                        mousewheel={true}
                        modules={[Keyboard, Autoplay, Mousewheel, Pagination]}
                        direction={'vertical'}
                        slidesPerView={1}
                        grabCursor={true}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        mousewheelcontrol={'true'}
                        speed={1000}
                        autoplay={{
                            delay: 5000,
                            stopOnLastSlide: false,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        keyboard={{
                            enabled: true,
                        }}
                    >
                        <div className="swiper-wrapper">
                            {BannerV5Data.map(banner =>
                                <SwiperSlide key={banner.id} className='bg-cover' style={{ background: `url(assets/img/projects/${banner.thumb})` }}>
                                    <SingleBannerV5 banner={banner} />
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </>
    );
};

export default BannerV5;