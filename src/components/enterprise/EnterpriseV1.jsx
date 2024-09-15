import React from 'react';
import SingleProgressV1 from './SingleProgressV1';
import ProgressV1Data from '@/assets/jsonData/progress/ProgressV1Data.json'

const EnterpriseV1 = () => {
    return (
        <>
            <div className="container overflow-hidden">
                <div className="expertise-area text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-title">
                                <h4 className="sub-title">Our Expertise </h4>
                                <h2 className="title">Best solutions provider</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="achivement-skill-items">
                                {ProgressV1Data.map(progress =>
                                    <SingleProgressV1 progress={progress} key={progress.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnterpriseV1;