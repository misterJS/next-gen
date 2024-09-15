import Link from 'next/link';
import React from 'react';

const SingleBannerV5 = ({ banner }) => {
    const { strokeTitle, title, tag, tag2, icon, btnText } = banner

    return (
        <>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-8">
                        <div className="content">
                            <div className="text-fixed">
                                <h1>{strokeTitle}</h1>
                            </div>
                            <h2>{title}</h2>
                            <div className="tags">
                                <Link href="#" scroll={false}>{tag}</Link>
                                <Link href="#" scroll={false}>{tag2}</Link>
                            </div>
                            <div className="button">
                                <Link className="btn-animation" href="/services">
                                    <i className={icon}></i>
                                    <span>{btnText}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV5;