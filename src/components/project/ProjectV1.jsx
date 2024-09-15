"use client"
import React, { useState } from 'react';
import SingleProjectV1 from './SingleProjectV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Navigation } from 'swiper/modules';
import ProjectV1Data from '@/assets/jsonData/project/ProjectV1Data.json'

const ProjectV1 = () => {

    const [activeSlide, setActiveSlide] = useState(1);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            <div className="project-style-one-area default-padding bg-gray">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content-left">
                                    <h4 className="sub-title">Popular Projects</h4>
                                    <h2 className="title">Featured Works</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fill">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-style-one-items">
                                <div className="project-nav">
                                    <div className="nav-items">
                                        <div className="project-button-prev"></div>
                                        <div className="project-button-next"></div>
                                    </div>
                                </div>
                                <Swiper
                                    className="project-center-stage-carousel"
                                    initialSlide={1} onSlideChange={handleSlideChange}
                                    modules={[Keyboard, Autoplay, Navigation]}
                                    spaceBetween={80}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        stopOnLastSlide: false,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    navigation={{
                                        nextEl: ".project-button-next",
                                        prevEl: ".project-button-prev"
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                            centeredSlides: false
                                        },
                                        1200: {
                                            slidesPerView: 2.5,
                                            spaceBetween: 60,
                                            centeredSlides: true
                                        },
                                        1800: {
                                            slidesPerView: 2.8,
                                            spaceBetween: 60,
                                        }
                                    }}
                                >
                                    <div className="swiper-wrapper">
                                        {ProjectV1Data.map(project =>
                                            <SwiperSlide key={project.id}>
                                                <SingleProjectV1 project={project} />
                                            </SwiperSlide>
                                        )}
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV1;