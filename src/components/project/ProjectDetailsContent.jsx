import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleRelatedProject from './SingleRelatedProject';
import ProjectDetailsV1List from '@/assets/jsonData/project/ProjectDetailsV1List.json';
import RelatedProjectV1 from '@/assets/jsonData/project/RelatedProjectV1.json';

const ProjectDetailsContent = ({ PortfolioInfo }) => {
    const { title, tag, thumbFull, client, desciplinesUsed, projectDetails, challenges, solutions } = PortfolioInfo;

    return (
        <>
            {/* ProjectDetailsTop */}
            <div className="project-details-area project-details-style-two default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-details-thumb">
                                <Image src={`/assets/img/projects/${thumbFull}`} alt={title} width={1500} height={700} />
                                <div className="project-single-tags">
                                    <Link href="#" scroll={false}>{tag}</Link>
                                </div>
                                <h2 className="title">{title}</h2>
                                <div className="project-author-details mt-50">
                                    <ul>
                                        <li>
                                            <div className="left-info">
                                                <h3>Client</h3>
                                            </div>
                                            <div className="right-info">
                                                <h3>{client}</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left-info">
                                                <h3>Disciplines Used</h3>
                                            </div>
                                            <div className="right-info">
                                                <p className="project-inner-tag">{desciplinesUsed}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left-info">
                                                <h3>Project Details</h3>
                                            </div>
                                            <div className="right-info">
                                                <p>{projectDetails}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ProjectDetailsCenter */}
            <div className="project-details-style-two project-details default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="thumb-grid">
                                <Image src="/assets/img/portfolio/v1.jpg" alt="Thumb" width={800} height={1000} />
                                <Image src="/assets/img/portfolio/v2.jpg" alt="Thumb" width={800} height={1000} />
                            </div>
                        </div>

                        <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15">
                            <div className="check-list">
                                <div className="single-list">
                                    <h4>Tantangan Proyek</h4>
                                    <p>{challenges}</p>
                                </div>
                                <div className="single-list">
                                    <h4>Solusi yang Diberikan</h4>
                                    <p>{solutions}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Projects */}
            <div className="related-projects">
                <div className="container">
                    <div className="related-project-items default-padding">
                        <div className="row mb-40 mb-md-0 mb-xs-0">
                            <div className="col-lg-6">
                                <div className="content-left">
                                    <h4 className="sub-title">Butuh lebih banyak proyek?</h4>
                                    <h2 className="title">Proyek Terkait</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {RelatedProjectV1.map((related) => (
                                <div className="col-lg-6 item-center" key={related.id}>
                                    <SingleRelatedProject related={related} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;
