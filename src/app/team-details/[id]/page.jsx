import SingleTeamMemberInfo from '@/components/team/SingleTeamMemberInfo';
import React from 'react';
import TeamV1Data from '@/assets/jsonData/team/TeamV1Data.json'
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import AwardContent from '@/components/awards/AwardContent';
import TeamQualification from '@/components/team/TeamQualification';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - Team Details"
};

const TeamDetails = ({ params }) => {

    const { id } = params
    const data = TeamV1Data.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutStyle2 pageTitle="Team Details" breadCrumb="team-details">
                <SingleTeamMemberInfo teamInfo={data} />
                <AwardContent />
                <TeamQualification />
            </LayoutStyle2>
        </>
    );
};

export default TeamDetails;