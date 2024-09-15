import React from 'react';
import ContactForm from './ContactForm';
import SocialShare from '../utilities/SocialShare';

const ContactContent = () => {
    return (
        <>
            <div className="contact-area contact-page overflow-hidden default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-tact-stye-one col-lg-5 pr-50 pr-md-15 pr-xs-15">
                            <div className="contact-style-one-info">
                                <ul className="contact-address bg-dark text-light" style={{ backgroundImage: "url(assets/img/shape/globe.png)" }}>
                                    <li>
                                        <a className="phone-link" href="tel:+62211234567">+62 882 1076 4116</a>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h4>Lokasi</h4>
                                            <p>
                                                Griya Garda Garuda Blok C4 no.5 <br /> Muktiwari, Kab. Bekasi, Jawa Barat, Indonesia
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h4>Email Resmi</h4>
                                            <a href="mailto:info@dwipancaekatama.com">info@dwipancabolting.id</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <ul className="social-link">
                                                <SocialShare />
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-tact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15 mt-md-50 mt-xs-50">
                            <div className="contact-form-style-one">
                                <h4 className="sub-title">Punya Pertanyaan?</h4>
                                <h2 className="title">Kirim Pesan ke Kami</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactContent;
