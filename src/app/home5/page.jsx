import React from 'react';
import BannerV4 from '@/components/banner/BannerV4';
import ParallaxContainer from '@/components/scroll/ParallaxContainer';
import DarkLayout from '@/components/layouts/DarkLayout';
import HeaderV3 from '@/components/header/HeaderV3';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Home 5"
};

const Home5 = () => {
    return (
        <>
            <div className="smooth-scroll-container home-five">
                <HeaderV3 />
                <BannerV4 />
                <ParallaxContainer />
                <DarkLayout />
            </div>
        </>
    );
};

export default Home5;