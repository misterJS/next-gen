import React from 'react';
import about4Thumb from '@/assets/img/about/4.jpg'
import Image from 'next/image';
import Link from 'next/link';

const BannerV3 = () => {
    return (
        <>
            <div className="banner-style-three">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to="38" data-speed="2000">38</div>
                                    <div className="operator">K</div>
                                </div>
                                <span className="medium">Completed Projects</span>
                            </div>
                            <div className="thumb">
                                <Image src={about4Thumb} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <h2>Better design for your digital products.</h2>
                                <Link className="btn-animation mt-30" href="/services">
                                    <i className="fas fa-arrow-right"></i> <span>Our Services</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV3;