import React from 'react';
import ServiceDetailsFaq from '@/assets/jsonData/services/ServiceDetailsFaq.json';
import SingleServicesDetailsFaq from './SingleServicesDetailsFaq';

const ServicesDetailsFaq = () => {
    return (
        <>
            <div className="accordion" id="faqAccordion">
                {ServiceDetailsFaq.map(faq =>
                    <SingleServicesDetailsFaq faq={faq} key={faq.id} />
                )}
            </div>
        </>
    );
};

export default ServicesDetailsFaq;