import ContactContent from '@/components/contact/ContactContent';
import DarkLayout from '@/components/layouts/DarkLayout';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Hubungi Kami"
};

const ContactUs = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Hubungi Kami" breadCrumb="contact-us">
                <ContactContent />
                <DarkLayout />
            </LayoutStyle2>
        </>
    );
};

export default ContactUs;
