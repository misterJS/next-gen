import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleRelatedProject = ({ related }) => {
    const { id, thumb, tag, title, icon, delay } = related

    return (
        <>
            <div className="portfolio-style-one animate" data-animate="fadeInUp" data-duration={delay}>
                <div className="thumb-zoom">
                    <Image src={`/assets/img/projects/${thumb}`} alt="Image Not Found" width={800} height={600} />
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

export default SingleRelatedProject;