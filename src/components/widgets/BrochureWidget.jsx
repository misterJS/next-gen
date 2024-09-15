import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BrochureWidget = () => {
    return (
        <>
            <div className="single-widget widget-brochure">
                <h4 className="widget-title">Brochure</h4>
                <ul>
                    <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Download Brochure </Link></li>
                    <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Company Details </Link></li>
                </ul>
            </div>
        </>
    );
};

export default BrochureWidget;