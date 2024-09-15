"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import shape5 from '@/assets/img/shape/5.png';
import SingleServiceV1 from './SingleServiceV1';
import ServiceV1Data from '@/assets/jsonData/services/ServiceV1Data.json';

const ServicesV1 = ({ sectionClass }) => {

    const [leftPosition, setLeftPosition] = useState(0);
    const elementRef = useRef(null);

    const handleScroll = () => {
        if (elementRef.current) {
            const windowTop = window.scrollY;
            const elementTop = elementRef.current.offsetTop;
            const newLeftPosition = -1500 + (windowTop - elementTop);
            setLeftPosition(newLeftPosition);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`creative-services-area overflow-hidden default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="bg-static" ref={elementRef}>
                    <Image className="bg-move" src={shape5} style={{ left: `${leftPosition}px` }} alt="Image Not Found" />
                </div>

                <div className="service-content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h4 className="sub-title">Layanan Kami</h4>
                                <h2 className="title">Solusi Terbaik untuk Kebutuhan Industri Anda</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container container-stage">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="services-item-one-items">
                                    <div className="services-nav">
                                        <div className="nav-items">
                                            <div className="services-button-prev"></div>
                                            <div className="services-button-next"></div>
                                        </div>
                                    </div>

                                    <Swiper
                                        className="services-carousel"
                                        modules={[Keyboard, Autoplay, Navigation]}
                                        spaceBetween={60}
                                        autoplay={false}
                                        loop={true}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        navigation={{
                                            nextEl: '.services-button-next',
                                            prevEl: '.services-button-prev',
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                                spaceBetween: 60,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 60,
                                            },
                                            1400: {
                                                slidesPerView: 2.5,
                                                spaceBetween: 60,
                                            },
                                            1800: {
                                                slidesPerView: 2.8,
                                                spaceBetween: 60,
                                            }
                                        }}
                                    >
                                        <div className="swiper-wrapper">
                                            {ServiceV1Data.map(service =>
                                                <SwiperSlide key={service.id}>
                                                    <SingleServiceV1 service={service} />
                                                </SwiperSlide>
                                            )}
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;
