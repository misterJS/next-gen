"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const SingleServicePopular = ({ popular }) => {
    const { icon, title, text } = popular

    return (
        <>
            <div className="item">
                <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={80} height={80} />
                <h4><Link href="#" onClick={handleSmoothScroll}>{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleServicePopular;