import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu }) => {
    return (
        <>
            <ul className="nav navbar-nav navbar-center">
                <li>
                    <Link href="/">Beranda</Link>
                </li>
                <li className="dropdown">
                    <Link href="/project">Proyek</Link>
                </li>
                <li>
                    <Link href="/about-dpe">Tentang DPE</Link>
                </li>
                <li className="disabled">
                    <a href="#" onClick={(e) => e.preventDefault()}>Kabar</a>
                </li>
                <li>
                    <Link href="/contact-dpe">Kontak DPE</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
