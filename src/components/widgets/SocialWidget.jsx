import Link from 'next/link';
import React from 'react';

const SocialWidget = () => {
    return (
        <>
            <div className="sidebar-item social-sidebar">
                <h4 className="title">follow us</h4>
                <div className="sidebar-info">
                    <ul>
                        <li className='facebook'>
                            <Link href="http://facebook.com" target='_blank'><i className="fab fa-facebook-f"></i></Link>
                        </li>
                        <li className='twitter'>
                            <Link href="http://twitter.com" target='_blank'><i className="fab fa-twitter"></i></Link>
                        </li>
                        <li className="pinterest">
                            <Link href="http://pinterest.com" target='_blank'>
                                <i className="fab fa-pinterest"></i>
                            </Link>
                        </li>
                        <li className='linkedin'>
                            <Link href="http://linkedin.com" target='_blank'><i className="fab fa-linkedin-in"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SocialWidget;