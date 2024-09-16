import Link from 'next/link';
import React from 'react';

const ContactWidget = () => {
    return (
        <>
            <div className="single-widget quick-contact-widget bg-gradient text-light">
                <div className="content">
                    <h3>Need Help?</h3>
                    <p>
                        Speak with a human to filling out a form? call corporate office and we will connect.
                    </p>
                    <h2>+(012) 6679545</h2>
                    <h4><a href="mailto:info@digital.com">info@digital.com</a></h4>
                    <Link className="btn mt-30 btn-sm circle btn-light effect" href="/contact-dpe">Contact Now</Link>
                </div>
            </div>
        </>
    );
};

export default ContactWidget;