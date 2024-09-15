import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu }) => {
    return (
        <>
            <ul className="nav navbar-nav navbar-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="/project">Projects</Link>
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>
                </li>
                <li className="disabled">
                    <a href="#" onClick={(e) => e.preventDefault()}>Blog</a>
                </li>
                <li>
                    <Link href="/contact-us">Contact</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
