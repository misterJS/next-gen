import BrandV1 from '@/components/brand/BrandV1';
import ClientV1 from '@/components/client/ClientV1';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import PriceV1 from '@/components/price/PriceV1';
import ServiceV3 from '@/components/services/ServiceV3';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';
import React from 'react';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Services 2"
};

const Services2 = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Popular Services" breadCrumb="Services-2">
                <WhyChooseV1 />
                <ServiceV3 />
                <TestimonialV1 />
                <PriceV1 sectionClass="default-padding" />
                <ClientV1 />
                <BrandV1 sectionClass="brand-style-two-area default-padding" />
            </LayoutStyle2>
        </>
    );
};

export default Services2;