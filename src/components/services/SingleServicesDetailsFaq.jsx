import React from 'react';

const SingleServicesDetailsFaq = ({ faq }) => {
    const { accordionId, accordionClass, expanded, bsTarget, controls, btnText, text } = faq

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={accordionId}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={bsTarget} aria-expanded={expanded} aria-controls={controls}>
                        {btnText}
                    </button>
                </h2>
                <div id={controls} className={`accordion-collapse collapse ${accordionClass}`} aria-labelledby={accordionId} data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p>{text} </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServicesDetailsFaq;