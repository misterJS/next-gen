import AccordionV1 from '@/components/accordion/AccordionV1';
import HeaderV2 from '@/components/header/HeaderV2';
import DarkLayout from '@/components/layouts/DarkLayout';
import React from 'react';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Home 2"
};

const Home2 = () => {
    return (
        <>
            <HeaderV2 />
            <AccordionV1 />
            <DarkLayout />
        </>
    );
};

export default Home2;