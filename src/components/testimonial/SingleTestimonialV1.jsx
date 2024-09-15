import Image from 'next/image';
import React from 'react';
import RatingsStar from '../utilities/RatingsStar';

const SingleTestimonialV1 = ({ testimonial }) => {
    const { thumb, icon, name, designation, ratings, text } = testimonial

    return (
        <>
            <div className="testimonial-style-one">
                <div className="provider">
                    <div className="thumb">
                        <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={800} height={800} />
                        <div className="quote">
                            <Image src={`/assets/img/shape/${icon}`} alt="Image Not Found" width={394} height={383} />
                        </div>
                    </div>
                    <div className="info">
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </div>
                </div>
                <div className="content">
                    <div className="rating">
                        <RatingsStar ratings={ratings} />
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;