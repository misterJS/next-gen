import React from 'react';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import ServiceV1Data from '@/assets/jsonData/services/ServiceV1Data.json'
import ServicesDetailsContent from '@/components/services/ServicesDetailsContent';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Services Details"
};

const ServicesDetails = ({ params }) => {

    const { id } = params
    const data = ServiceV1Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutStyle2 pageTitle="Turn Information Into Actionable Insights" breadCrumb="Services-details">
                <ServicesDetailsContent serviceInfo={data} />
            </LayoutStyle2>
        </>
    );
};

export default ServicesDetails;