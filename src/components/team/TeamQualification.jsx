import React from 'react';
import TeamQualificationData from '@/assets/jsonData/team/TeamQualificationData.json'
import TeamProgressData from '@/assets/jsonData/team/TeamProgressData.json';
import SingleTeamProgress from './SingleTeamProgress';

const TeamQualification = () => {
    return (
        <>
            <div className="team-qualifcations default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="qualification-grid">
                                <h2>Work Expertise</h2>
                                {TeamQualificationData.map(qualification =>
                                    <div className="qualification-item" key={qualification.id}>
                                        <i className={qualification.icon}></i>
                                        <h4>{qualification.title}</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="skill-items pl-50 pl-md-0 pl-xs-0 mt-md-50 mt-xs-30">
                                <h2>Personal Skills</h2>
                                {TeamProgressData.map(progress =>
                                    <SingleTeamProgress progress={progress} key={progress.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamQualification;