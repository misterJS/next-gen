"use client"
import Link from 'next/link';
import React from 'react';

const MainMenuV2 = ({ toggleSubMenu2 }) => {
    return (
        <>
            <ul className="simple-menu-list">
                <li>
                    <Link href="#">Home </Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2}></i>
                    <ul className="sub-menu">
                        <li><Link href="/">Digital Agency</Link></li>
                        <li><Link href="/home5">Parallax Showcase</Link></li>
                        <li><Link href="/home2">Portfolio Interactive</Link></li>
                        <li><Link href="/home3">Creative Agency</Link></li>
                        <li><Link href="/home4">Parallax Portfolio</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#">Blog </Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2}></i>
                    <ul className="sub-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar/1">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Colum</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Colum</Link></li>
                        <li><Link href="/blog-single">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li>
                <li><Link href="/services">Services </Link></li>
                <li><Link href="/about-us">About</Link> </li>
                <li><Link href="/contact-us">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenuV2;