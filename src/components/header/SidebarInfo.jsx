import Image from 'next/image';
import React from 'react';
import logoLight from '@/assets/img/logo-light.png';
import Link from 'next/link';
import { toast } from 'react-toastify';

const SidebarInfo = ({ openInfoBar, closeInfoBar, isInfoOpen }) => {

    const handleSubscribe = (event) => {
        event.preventDefault();
        event.target.reset();
        toast.success("Terima kasih sudah berlangganan!");
    };

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="side-menu">
                            <Link href="#" onClick={openInfoBar} scroll={false}>
                                <span className="bar-1"></span>
                                <span className="bar-2"></span>
                                <span className="bar-3"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`side ${isInfoOpen ? "on" : ""}`}>
                    <Link href="#" scroll={false} className="close-side" onClick={closeInfoBar}><i className="fa fa-times"></i></Link>
                    <div className="widget">
                        <div className="logo">
                            <Image src={logoLight} alt="Logo Dwi Panca" />
                        </div>
                    </div>
                    <div className="widget">
                        <p>
                            Dwi Panca adalah penyedia solusi industri yang terpercaya, mencakup berbagai layanan seperti pemeliharaan, kalibrasi peralatan, serta penyediaan alat berkualitas tinggi. Kami siap membantu Anda dalam memenuhi kebutuhan industri dengan solusi yang efisien dan inovatif.
                        </p>
                    </div>
                    <div className="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <p>Alamat</p>
                                        <strong>Griya Garda Garuda Blok C4 no.5, Muktiwari, Kab. Bekasi, Jawa Barat, Indonesia</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Email</p>
                                        <strong>info@dwipancabolting.id</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Kontak</p>
                                        <strong>+62 8821 0764 116</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter">
                        <h4 className="title">Berlangganan Sekarang!</h4>
                        <form onSubmit={handleSubscribe}>
                            <div className="input-group stylish-input-group">
                                <input type="email" placeholder="Masukkan email Anda" className="form-control" name="email" autoComplete='off' />
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="widget social">
                        <ul className="link">
                            <li><a href="https://www.facebook.com/dwipancaekatama"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/dwipancaekatama"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/pt-dwi-panca-ekatama/"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;
