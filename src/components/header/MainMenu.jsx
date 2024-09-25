import React from "react";
import Link from "next/link";

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
          <Link href="/about">Tentang DPE</Link>
        </li>
        <li>
          <a href="/blogs">Kabar</a>
        </li>
        <li>
          <Link href="/contact">Kontak DPE</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
