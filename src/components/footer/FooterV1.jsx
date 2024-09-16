import Image from 'next/image';
import React from 'react';
import SocialShare from '../utilities/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';
import Link from 'next/link';
import logoLight from '@/assets/img/logo-light.png';
import logo from '@/assets/img/logo.png';

const FooterV1 = ({ logoWhite }) => {
    return (
        <>
            <footer>
                <div className="footer-box">
                    <div className="container">
                        <div className="f-items default-padding-bottom pt-70 pt-xs-0">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 footer-item mt-50">
                                    <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                                        <Link href="/">
                                            {logoWhite ? (
                                                <Image className="logo" src={logoLight} alt="Logo" />
                                            ) : (
                                                <Image className="logo" src={logo} alt="Logo" />
                                            )}
                                        </Link>
                                        <p>
                                            PT Dwi Panca Ekatama adalah penyedia solusi industri yang berfokus pada manajemen flange, solusi bolting, torsi hidrolik, instalasi listrik, dan sistem ERP. Kami berkomitmen memberikan layanan terbaik untuk bisnis Anda.
                                        </p>
                                        <div className="footer-social mt-30">
                                            <ul>
                                                <SocialShare />
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                    <div className="f-item link">
                                        <h4 className="widget-title">Perusahaan</h4>
                                        <ul>
                                            <li>
                                                <Link href="/about">Profil Perusahaan</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">Tentang Kami</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Pusat Bantuan</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Karir</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">Fitur</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Kontak</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 footer-item mt-50">
                                    <div className="f-item contact">
                                        <h4 className="widget-title">Info Kontak</h4>
                                        <ul>
                                            <li>
                                                <div className="content">
                                                    <strong>Alamat:</strong>
                                                    Griya Garda Garuda Blok C4 no.5, Muktiwari, Kab. Bekasi, Jawa Barat, Indonesia
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <strong>Email:</strong>
                                                    <a href="mailto:info@dwipancabolting.id">info@dwipancabolting.id</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <strong>Telepon:</strong>
                                                    <a href="tel:+6288210764116">+62 8821 0764 116</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 footer-item mt-50">
                                    <div className="f-item newsletter">
                                        <h4 className="widget-title">Newsletter</h4>
                                        <p>
                                            Bergabunglah dengan daftar pelanggan kami untuk mendapatkan berita terbaru dan penawaran khusus.
                                        </p>
                                        <FooterNewsLetter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom bg-dark text-light text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 offset-lg-3">
                                    <p>
                                        Copyright &copy; {(new Date().getFullYear())} PT Dwi Panca Ekatama. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
