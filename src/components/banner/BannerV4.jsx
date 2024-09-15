import Link from 'next/link';
import React from 'react';

const BannerV4 = () => {
    return (
        <>
            <div className="banner-style-five-area" style={{ backgroundImage: 'url(/assets/img/shape/7.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="banner-five-info text-light animate fadeInUp">
                                <h2>Creative <strong>Work <span>Work</span></strong></h2>
                                <div className="button overflow-hidden mt-50">
                                    <Link href="/project-details/1" className="btn-animated"><i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV4;