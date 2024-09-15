"use client"
import React from 'react';
import SocialShare from '../utilities/SocialShare';
import logoLight from '@/assets/img/logo-light.png';
import Image from 'next/image';
import Link from 'next/link';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import useSubMenuToggleV2 from '@/hooks/useSubMenuToggleV2';
import MainMenuV2 from './MainMenuV2';
import SidebarWidgetAddress from '../widgets/SidebarWidgetAddress';
import WidgetNewsLetter from '../widgets/WidgetNewsLetter';

const HeaderV2 = () => {

    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const toggleSubMenu2 = useSubMenuToggleV2();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-default validnavs nav-full-width white bg-dark navbar-fixed ${isInfoOpen ? "pause-sticked" : ""}`}>
                    <div className="container-full d-flex justify-content-between align-items-center">

                        <div className="col-xl-2 col-lg-3">
                            <div className="navbar-header">
                                <Link className="nav/bar-brand" href="/">
                                    <Image src={logoLight} className="logo logo-scrolled" alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-6">
                            <div className="collapse navbar-collapse" id="navbar-menu">
                                <div className="left-info">
                                    <p><strong>Contact</strong> <a href="mailto:support@avrix.com">support@avrix.com</a></p>
                                </div>
                                <div className="right-info">
                                    <ul>
                                        <SocialShare />
                                    </ul>
                                </div>
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
                                                            <SocialShare />
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

export default HeaderV2;