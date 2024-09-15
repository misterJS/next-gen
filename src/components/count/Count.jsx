"use client"
import React from 'react';
import CountUp from 'react-countup';

const Count = ({ children, end, enableScrollSpy }) => {

    return (
        <>
            <CountUp end={end} enableScrollSpy={enableScrollSpy}>
                {children}
            </CountUp>
        </>
    );
};

export default Count;