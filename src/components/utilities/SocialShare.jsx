import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li className='facebook'>
                <a href="https://facebook.com/dwipancaekatama" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </li>
            <li className='twitter'>
                <a href="https://twitter.com/dwipancaekatama" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li className='linkedin'>
                <a href="https://linkedin.com/company/pt-dwi-panca-ekatama" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </li>
            <li className='instagram'>
                <a href="https://instagram.com/dwipancaekatama" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </li>
        </>
    );
};

export default SocialShare;
