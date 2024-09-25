import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import TeamPageContent from '@/components/team/TeamPageContent';
import React from 'react';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Team"
};

const Team = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Professional Team Members" breadCrumb="Team">
                <TeamPageContent />
            </LayoutStyle2>
        </>
    );
};

export default Team;