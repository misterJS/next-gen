import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleProjectV1 = ({ project }) => {
    const { id, thumb, icon, tag, category } = project

    return (
        <>
            <div className="project-style-one">
                <Image src={`/assets/img/portfolio/${thumb}`} alt="Thumb" width={800} height={600} />
                <div className="overlay">
                    <div className="link">
                        <Link href={`/project-details/${id}`}><i className={icon}></i></Link>
                    </div>
                    <div className="content">
                        <span>{tag}</span>
                        <h4><Link href={`/project-details/${id}`}>{category}</Link></h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1;