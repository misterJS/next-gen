"use client";
import useStickyMenu from "@/hooks/useStickyMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoLight from "@/assets/img/logo-light.png";
import logo from "@/assets/img/logo.png";
import useSidebarInfo from "@/hooks/useSidebarInfo";
import SidebarInfo from "./SidebarInfo";
import useSidebarMenu from "@/hooks/useSidebarMenu";
import MainMenu from "./MainMenu";
import useSubMenuToggle from "@/hooks/useSubMenuToggle";

const HeaderV1 = ({ logoWhite }) => {
  const toggleSubMenu = useSubMenuToggle();
  const isMenuSticky = useStickyMenu();
  const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center no-full ${
            isMenuSticky ? "sticked" : "no-background"
          } ${isInfoOpen ? "pause-sticked" : ""} ${
            isOpen ? "navbar-responsive" : ""
          }`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={openMenu}
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" href="/">
                {logoWhite ? (
                  <Image src={logoLight} className="logo" alt="Logo" />
                ) : (
                  <Image src={logo} className="logo" alt="Logo" />
                )}
              </Link>
            </div>

            <div
              className={`collapse navbar-collapse ${
                isOpen ? "show collapse-mobile" : "collapse-mobile"
              }`}
              id="navbar-menu"
            >
              {logoWhite ? (
                <Image src={logoLight} className="logo" alt="Logo" />
              ) : (
                <Image src={logo} className="logo" alt="Logo" />
              )}

              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={closeMenu}
              >
                <i className="fa fa-times"></i>
              </button>
              <MainMenu
                isOpen={isOpen}
                closeMenu={closeMenu}
                toggleSubMenu={toggleSubMenu}
              />
            </div>

            <SidebarInfo
              openInfoBar={openInfoBar}
              closeInfoBar={closeInfoBar}
              isInfoOpen={isInfoOpen}
            />
          </div>
          <div
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={() => {
              closeMenu();
              closeInfoBar();
            }}
          ></div>
        </nav>
      </header>
    </>
  );
};

export default HeaderV1;
