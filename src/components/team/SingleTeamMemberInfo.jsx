import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';

const SingleTeamMemberInfo = ({ teamInfo }) => {
    const { person, thumbFull, designation, age, mail, phone } = teamInfo

    return (
        <>
            <div className="team-single-area default-padding">
                <div className="container">
                    <div className="team-content-top">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 left-info">
                                <div className="thumb">
                                    <Image src={`/assets/img/team/${thumbFull}`} alt="Thumb" width={800} height={950} />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="team-right-info">
                                    <h2>{person}</h2>
                                    <span>{designation}</span>
                                    <p>
                                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.
                                    </p>
                                    <ul className="user-location">
                                        <li>
                                            <strong>Age:</strong>
                                            <p>{age} Years</p>
                                        </li>
                                        <li>
                                            <strong>Location:</strong>
                                            <p>Baird House, 15-17 St Cross St London EC1N 8UW</p>
                                        </li>
                                        <li>
                                            <strong>Email:</strong>
                                            <a href={`mailto:${mail}`}>{mail}</a>
                                        </li>
                                        <li>
                                            <strong>Phone:</strong>
                                            <a href={`tel:${phone}`}>{phone}</a>
                                        </li>
                                    </ul>
                                    <div className="social">
                                        <Link className="btn circle btn-sm btn-gradient animation" href="/contact-dpe">Contact Me</Link>
                                        <div className="share-link">
                                            <i className="fas fa-share-alt"></i>
                                            <ul>
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
        </>
    );
};

export default SingleTeamMemberInfo;