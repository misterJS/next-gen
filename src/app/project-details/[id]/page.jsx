import React from 'react';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import PortfolioV1Data from '@/assets/jsonData/portfolio/PortfolioV1Data.json';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import DarkLayout from '@/components/layouts/DarkLayout';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Project Details"
};

const ProjectDetails = ({ params }) => {

    const { id } = params
    const data = PortfolioV1Data.find(portfolio => portfolio.id === parseInt(id))

    return (
        <>
            <LayoutStyle2 pageTitle={data.title} breadCrumb="project-details">
                <ProjectDetailsContent PortfolioInfo={data} />
                <DarkLayout />
            </LayoutStyle2>
        </>
    );
};

export default ProjectDetails;