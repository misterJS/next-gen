import Image from 'next/image';
import React from 'react';
import shape3 from '@/assets/img/shape/bg-shape-3.png'

const BreadCrumb = ({ breadCrumb, pageTitle, hasOffset }) => {
    return (
        <>
            <div className="breadcrumb-area bg-gray">
                <div className="container">
                    <div className="breadcrumb-item">
                        <div className="breadcrum-shape">
                            <Image src={shape3} alt="shape" />
                        </div>
                        <div className="row">
                            <div className={`col-lg-8 ${hasOffset}`}>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                                        <li className="active">{breadCrumb ? breadCrumb : "Not Found"}</li>
                                    </ol>
                                </nav>
                                <h1>{pageTitle ? pageTitle : "Not Found"}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;