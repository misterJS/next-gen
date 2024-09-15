import Image from 'next/image';
import React from 'react';
import WhyChooseV1Data from '@/assets/jsonData/whyChoose/WhyChooseV1Data.json';
import aboutThumb2 from '@/assets/img/about/2.jpg';
import PopupVideo from '../video/PopupVideo';

const WhyChooseV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`choose-us-style-one-area default-padding ${sectionClass}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="choose-us-style-one-thumb">
                                <Image src={aboutThumb2} alt="Image Not Found" />
                                <PopupVideo videoId="ipUuoMCEbDQ" videoClass="popup-youtube video-play-button">
                                    <i className="fas fa-play"></i>
                                    <div className="effect"></div>
                                </PopupVideo>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="choose-us-style-one d-flex-between">
                                <div className="top-info">
                                    <h4 className="sub-title">Mengapa Memilih DPE</h4>
                                    <h2 className="title">Tingkatkan Pertumbuhan Bisnis Anda dengan Layanan Kami</h2>
                                </div>
                                <div className="bottom-info">
                                    <ul className="list-item">
                                        {WhyChooseV1Data.map(services =>
                                            <li key={services.id}>{services.service} <strong>{services.number}</strong></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;
