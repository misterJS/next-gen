import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServiceV1 = ({ service }) => {
    const { id, icon, title, text, number } = service

    return (
        <>
            <div className="cteative-service-item">
                <Image src={`/assets/img/icon/${icon}`} alt="Icon" width={80} height={80} />
                <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                <p>{text}</p>
                <span>{number}</span>
            </div>
        </>
    );
};

export default SingleServiceV1;