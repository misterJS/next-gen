import Image from 'next/image';
import React from 'react';

const ProjectDetailsItem = ({ accordionInfo }) => {
    const { thumbFull, title, subTitle } = accordionInfo

    return (
        <>
            <div className="project-details-items">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-thumb">
                            <Image src={`/assets/img/portfolio/${thumbFull}`} alt="Thumb" width={1900} height={990} />
                        </div>
                    </div>
                    <div className="col-xl-10 offset-xl-1">

                        <div className="project-details mt-40">
                            <div className="top-info">
                                <div className="row">

                                    <div className="col-lg-4 order-lg-last">
                                        <ul className="gallery-project-basic-info">
                                            <li>
                                                <div className="info">
                                                    Clients: <span>validthemes</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info">
                                                    Project Type: <span>{subTitle}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info">
                                                    Date: <span>25 August, 2023</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info">
                                                    Address: <span>New York United state</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-8">
                                        <h2>{title}</h2>
                                        <p>
                                            Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque ante aenean elementum. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="row mt-40 mb-40">
                                <div className="col-lg-5 pr-50 pr-md-15 pr-xs-15">
                                    <div className="check-list">
                                        <div className="single-list">
                                            <h4>Mobile Optimization</h4>
                                            <p>
                                                Tempor nonummy metus lobortis. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum potenti.
                                            </p>
                                        </div>
                                        <div className="single-list">
                                            <h4>Marketing Automation</h4>
                                            <ul className="list-disc">
                                                <li>Social media marketing</li>
                                                <li>Search engine optimization (seo)</li>
                                                <li>Public Relations</li>
                                                <li>Content marketing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="thumb-grid">
                                        <Image src="/assets/img/portfolio/v1.jpg" alt="Thumb" width={800} height={100} />
                                        <Image src="/assets/img/portfolio/v2.jpg" alt="Thumb" width={800} height={100} />
                                    </div>
                                </div>
                            </div>
                            <p>
                                Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.  Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam nulla primis placerat facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque ante aenean elementum curae malesuada ullamcorper.
                            </p>
                            <div className="row mt-50 mt-xs-30">
                                <div className="col-lg-6 col-md-6">
                                    <Image src="/assets/img/portfolio/11.jpg" alt="Thumb" width={800} height={600} />
                                </div>
                                <div className="col-lg-6 col-md-6 mt-xs-30">
                                    <Image src="/assets/img/portfolio/12.jpg" alt="Thumb" width={800} height={600} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsItem;