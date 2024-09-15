import React from 'react';

const SingleAboutV2Accordion = ({ accordion }) => {
    const { dataId, dataTarget, dataControls, title, ariaExpanded, dataClass, text } = accordion

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={dataId}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={dataTarget} aria-expanded={ariaExpanded} aria-controls="collapseOne">
                        {title}
                    </button>
                </h2>
                <div id={dataControls} className={`accordion-collapse collapse ${dataClass}`} aria-labelledby={dataId} data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleAboutV2Accordion;