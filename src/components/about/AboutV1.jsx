import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import about1Thumb from '@/assets/img/banner/2.webp';
import Count from '../count/Count';

const AboutV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`about-area ${sectionClass}`}>
                <div className="blur-bg-theme"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="about-style-one-thumb animate" data-animate="fadeInUp">
                                <Image src={about1Thumb} alt="Image Not Found" />
                                <div className="fun-fact text-light animate" data-animate="fadeInDown" data-duration="1s">
                                    <div className="counter">
                                        <div className="timer"><Count end={38} enableScrollSpy /></div>
                                        <div className="operator">0</div>
                                    </div>
                                    <span className="medium">Proyek Terselesaikan</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-one">
                                <h2 className="title mb-30">Proses Kerja Kami</h2>
                                <p>
                                    Dwi Panca Ekatama adalah penyedia layanan industri yang meliputi solusi bolting, flange management, torsi hidrolik, instalasi listrik, dan pengembangan sistem ERP. Kami berkomitmen memberikan layanan berkualitas tinggi yang mendukung efisiensi dan pertumbuhan bisnis Anda.
                                </p>
                                <ul className="list-simple">
                                    <li>Komunikasi yang efektif dengan klien.</li>
                                    <li>Pengalaman dalam memberikan solusi inovatif.</li>
                                </ul>
                                <Link href="/about-dpe" className="arrow-btn"><i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;
