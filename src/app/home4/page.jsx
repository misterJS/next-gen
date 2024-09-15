import BannerV5 from '@/components/banner/BannerV5';
import HeaderV5 from '@/components/header/HeaderV5';
import DarkLayout from '@/components/layouts/DarkLayout';
import React from 'react';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Home 4"
};

const Home4 = () => {
    return (
        <>
            <HeaderV5 />
            <BannerV5 />
            <DarkLayout />
        </>
    );
};

export default Home4;