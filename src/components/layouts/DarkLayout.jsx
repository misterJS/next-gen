"use client";
import React, { useEffect } from 'react';

const DarkLayout = () => {

    useEffect(() => {
        document.body.classList.add('bg-dark');

        return () => {
            document.body.classList.remove('bg-dark');
        };
    }, []);

    return (
        <>

        </>
    );
};

export default DarkLayout;