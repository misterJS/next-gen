import ContactContent from '@/components/contact/ContactContent';
import DarkLayout from '@/components/layouts/DarkLayout';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Hubungi Kami"
};

const ContactUs = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Hubungi Kami" breadCrumb="contact">
                <ContactContent />
                <DarkLayout />
            </LayoutStyle2>
        </>
    );
};

export default ContactUs;
