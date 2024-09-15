import React from 'react';
import PopupVideo from '../video/PopupVideo';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8 banner-one-item">
                            <h4>Mitra Solusi Terpercaya untuk Bisnis Anda</h4>
                            <h2>Dwi Panca <strong>Ekatama</strong></h2>
                            <p>Kami menyediakan solusi yang dirancang untuk mendukung efisiensi dan pertumbuhan bisnis Anda, dengan layanan yang meliputi pemeliharaan peralatan industri, kalibrasi, serta solusi inovatif lainnya.</p>
                        </div>
                        <div className="col-lg-3 offset-lg-1 banner-one-item text-center">
                            <div className="curve-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text><textPath href="#textPath">Layanan Kami</textPath></text>
                                </svg>
                                <PopupVideo videoClass="popup-youtube" videoId="ipUuoMCEbDQ">
                                    <i className="fas fa-arrow-right"></i>
                                </PopupVideo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;
