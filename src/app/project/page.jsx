import DarkLayout from '@/components/layouts/DarkLayout';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import PortfolioV2 from '@/components/portfolio/PortfolioV2';
import React from 'react';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Proyek"
};

const Project = () => {
    return (
        <>
            <LayoutStyle2 pageTitle={`Lihat Beberapa Studi Kasus Terbaru Kami`} breadCrumb="proyek">
                <PortfolioV2 />
                <DarkLayout />
            </LayoutStyle2>
        </>
    );
};

export default Project;
