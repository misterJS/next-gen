"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import SingleTestimonialV1 from './SingleTestimonialV1';
import TestimonialV1Data from '@/assets/jsonData/testimonial/TestimonialV1Data.json';

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-style-one-area default-padding-top">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content-left">
                                    <h4 className="sub-title">Testimoni</h4>
                                    <h2 className="title">Apa Kata Pelanggan Kami</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="testimonial-one-carousel-box">
                            <Swiper
                                className="testimonial-style-one-carousel"
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3000,
                                    stopOnLastSlide: false,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                pagination={{
                                    el: ".testimonial-one-pagination",
                                    type: 'fraction',
                                    clickable: true
                                }}
                                keyboard={{
                                    enabled: true,
                                }}
                                navigation={{
                                    nextEl: '.testimonial-one-button-next',
                                    prevEl: '.testimonial-one-button-prev',
                                }}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV1Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV1 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>
                            <div className="testimonial-one-swiper-nav">
                                <div className="testimonial-one-pagination"></div>
                                <div className="testimonial-one-button-prev"></div>
                                <div className="testimonial-one-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default TestimonialV1;
