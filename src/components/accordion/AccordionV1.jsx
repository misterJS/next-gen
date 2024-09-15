"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import AccordionV1Data from '@/assets/jsonData/accordion/AccordionV1Data.json'

const AccordionV1 = () => {

    const [activeIndex, setActiveIndex] = useState(1)

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    }

    return (
        <>
            <div className="accrdion-portfolio-area">
                <div className="container-fluid">
                    <div className="row">
                        <ul className="accordion-portfolio-lists text-light" id="accordion">
                            {AccordionV1Data.map((data, id) =>
                                <li
                                    key={data.id}
                                    className={activeIndex === id ? 'out' : ''}
                                    onMouseEnter={() => handleMouseEnter(id)}
                                    style={{ backgroundImage: `url(/assets/img/portfolio/${data.thumb})` }}>

                                    <h3>{data.subTitle}</h3>
                                    <span>{data.number}</span>

                                    <div className="accordion-overlay">
                                        <span>{data.category}</span>
                                        <h2><Link href={`/project/project-single/${id + 1}`} >{data.title}</Link></h2>
                                        <p>{data.textFirst} <br /> {data.textLast}</p>
                                        <Link href={`/project/project-single/${id + 1}`}><i className={data.icon}></i></Link>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordionV1;