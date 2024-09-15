import HeaderV2 from '@/components/header/HeaderV2';
import DarkLayout from '@/components/layouts/DarkLayout';
import Modal from '@/components/modal/Modal';
import ProjectDetailsItem from '@/components/project/ProjectDetailsItem';
import React from 'react';
import AccordionV1Data from '@/assets/jsonData/accordion/AccordionV1Data.json'

const ProjectSingleModal = ({ params }) => {

    const { id } = params
    const data = AccordionV1Data.find(accordion => accordion.id === parseInt(id))

    return (
        <>
            <HeaderV2 />
            <Modal>
                <ProjectDetailsItem accordionInfo={data} />
                <DarkLayout />
            </Modal>
        </>
    );
};

export default ProjectSingleModal;