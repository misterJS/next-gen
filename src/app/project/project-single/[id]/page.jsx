import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV1 from '@/components/header/HeaderV1';
import DarkLayout from '@/components/layouts/DarkLayout';
import ProjectDetailsItem from '@/components/project/ProjectDetailsItem';
import React from 'react';
import AccordionV1Data from '@/assets/jsonData/accordion/AccordionV1Data.json'

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Project Single"
  };

const ProjectSingle = ({ params }) => {

    const { id } = params
    const data = AccordionV1Data.find(accordion => accordion.id === parseInt(id))

    return (
        <>
            <HeaderV1 logoWhite={true} />
            <BreadCrumb pageTitle={`Take a look some of our recent case studies`} breadCrumb="project" />
            <div className="container">
                <div className="project-item-wrapper default-padding">
                    <ProjectDetailsItem accordionInfo={data} />
                </div>
            </div>
            <FooterV1 logoWhite={true} />
            <DarkLayout />
        </>
    );
};

export default ProjectSingle;