import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServiceV3 = ({ service }) => {
    const { id, icon, title, number, text, list1, list2, icon2, thumb } = service

    return (
        <>
            <li>
                <Link href={`/services-details/${id}`} className="service-hover-item">
                    <div className="service-hover-content">
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                        <div className="item-title">
                            <h2>{title}</h2>
                            <span>{number}</span>
                        </div>
                        <div className="details">
                            <p>{text}</p>
                            <ul>
                                <li>{list1}</li>
                                <li>{list2}</li>
                            </ul>
                        </div>
                        <div className="arrow">
                            <strong className="btn-animation"><i className={icon2}></i> <span>View More</span></strong>
                        </div>
                    </div>
                    <div className="service-hover-wrapper">
                        <Image className="service-hover-placeholder" src={`/assets/img/portfolio/${thumb}`} alt="Image Not Found" width={337} height={337} />
                    </div>
                </Link>
            </li>
        </>
    );
};

export default SingleServiceV3;