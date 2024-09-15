import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SinglePortfolioV1 = ({ portfolio }) => {
    const { id, thumb, tag, title, icon } = portfolio

    return (
        <>
            <div className="portfolio-style-one animate" data-animate="fadeInUp">
                <div className="thumb-zoom">
                    <Link href={`/project-details/${id}`}>
                        <Image src={`/assets/img/projects/${thumb}`} width={800} height={800} alt="Image Not Found" />
                    </Link>
                </div>
                <div className="pf-item-info">
                    <div className="content-info">
                        <span>{tag}</span>
                        <h2><Link href={`/project-details/${id}`}>{title}</Link></h2>
                    </div>
                    <div className="button">
                        <Link href={`/project-details/${id}`} className="pf-btn"><i className={icon}></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioV1;