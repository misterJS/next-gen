
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import ProjectDetails2Content from '@/components/project/ProjectDetails2Content';
import React from 'react';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Project Details 2"
};

const ProjectDetails2 = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Natural plus modern." breadCrumb="project-details-2">
                <ProjectDetails2Content />
            </LayoutStyle2>
        </>
    );
};

export default ProjectDetails2;