import Link from 'next/link';
import React from 'react';

const SingleParallaxItem = ({ data }) => {
    const { tag, title, date, thumb, id } = data

    return (
        <>
            <section className="parallax-item">
                <div className="parralax-overlay">
                    <span>{tag}</span>
                    <h2>{title}</h2>
                    <p>{date}</p>
                </div>
                <div className="item-background" style={{ backgroundImage: `url(/assets/img/projects/${thumb})` }}></div>
                <Link href={`/project/project-single/${id}`}></Link>
            </section>
        </>
    );
};

export default SingleParallaxItem;