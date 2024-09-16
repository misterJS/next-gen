"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BannerZoomV1 = () => {

    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const width = 100 + scroll / 18 + '%';

    return (
        <>
            <div className="banner-animation-zoom">
                <div className="animation-zoom-banner" style={{ backgroundImage: "url(/assets/img/banner/1.webp)", width: width }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="experience-box">
                                <div className="inner-content">
                                    <h2><strong>16+</strong> Proyek Terselesaikan</h2>
                                    <p>
                                        Kami telah menyelesaikan lebih dari 16 proyek yang berfokus pada penyediaan solusi bisnis yang inovatif dan efisien. Kami siap membantu Anda dengan layanan yang kami tawarkan.
                                    </p>
                                    <Link className="btn-animation" href="/services"><i className="fas fa-arrow-right"></i> <span>Layanan Kami</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default BannerZoomV1;
