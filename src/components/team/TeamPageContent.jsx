import React from 'react';
import TeamV1Data from '@/assets//jsonData/team/TeamV1Data.json'
import SingleTeamV1 from './SingleTeamV1';

const TeamPageContent = () => {
    return (
        <>
            <div className="team-style-one-area bg-cover default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        {TeamV1Data.map(team =>
                            <div className="col-xl-4 col-md-6 mb-30" key={team.id}>
                                <SingleTeamV1 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamPageContent;