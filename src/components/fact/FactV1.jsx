import React from 'react';
import SingleFactV1 from './SingleFactV1';
import FactV1Data from '@/assets/jsonData/fact/FactV1Data.json'

const FactV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`fun-factor-circle-area default-padding-bottom ${sectionClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fun-fact-circle-lists">
                                {FactV1Data.map(fact =>
                                    <SingleFactV1 fact={fact} key={fact.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV1;