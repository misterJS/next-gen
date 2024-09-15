"use client";
import Link from 'next/link';
import React from 'react';
import MainMenuV2 from './MainMenuV2';
import WidgetNewsLetter from '../widgets/WidgetNewsLetter';
import SidebarWidgetAddress from '../widgets/SidebarWidgetAddress';
import Image from 'next/image';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import useSubMenuToggleV2 from '@/hooks/useSubMenuToggleV2';
import logoLight from '@/assets/img/logo-light.png';
import SocialShareV2 from '../utilities/SocialShareV2';

const HeaderV3 = () => {

    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const toggleSubMenu2 = useSubMenuToggleV2();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-default validnavs nav-full-width white bg-dark navbar-fixed on no-full ${isInfoOpen ? "pause-sticked" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="col-xl-2 col-lg-3">
                            <div className="navbar-header">
                                <Link className="nav/bar-brand" href="/">
                                    <Image src={logoLight} className="logo logo-scrolled" alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="attr-right">
                            <div className="attr-nav flex">
                                <ul>
                                    <li className="side-menu">
                                        <Link href="#" scroll={false} onClick={openInfoBar}>
                                            <strong>MENU </strong>
                                            <div className="line">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2">
                                <div className={`side text-light ${isInfoOpen ? "on" : ""}`}>
                                    <Link href="#" className="close-side" onClick={closeInfoBar}>Close <i className="fas fa-times"></i></Link>

                                    <div className="widget">
                                        <div className="logo">
                                            <Image src={logoLight} alt="Logo" />
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1">
                                                <div className="side-navbar-inner">
                                                    <div className="simple-menu">
                                                        <MainMenuV2 toggleSubMenu2={toggleSubMenu2} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1">
                                                <div className="side-widgets">
                                                    <SidebarWidgetAddress />
                                                    <WidgetNewsLetter />
                                                    <div className="widget social">
                                                        <ul className="link">
                                                            <SocialShareV2 />
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="overlay-screen"></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV3;