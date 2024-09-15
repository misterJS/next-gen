"use client";
import React, { useEffect, useRef, useState } from 'react';

const SingleTeamProgress = ({ progress }) => {
    const { title, end, operator } = progress

    const [progressWidth, setProgressWidth] = useState(0);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setProgressWidth(end);
            }
        }, { threshold: 1.0 });

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, [end]);

    return (
        <>
            <div className="progress-box">
                <h5>{title}</h5>
                <div className="progress" ref={progressBarRef}>
                    <div className="progress-bar progress-bar-timing" role="progressbar" data-width={end} style={{ width: `${progressWidth}%` }}>
                        <span>{end}{operator}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamProgress;