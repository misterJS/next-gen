import React from 'react';
import SingleBrandV1 from './SingleBrandV1';
import BrandV1Data from '@/assets/jsonData/brand/BrandV1Data.json'

const BrandV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`brand-area relative overflow-hidden ${sectionClass}`}>
                <div className="brand-style-one">
                    <div className="container-fill">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="brand-items">
                                    <div className="brand-conetnt">
                                        {BrandV1Data.map(brand =>
                                            <SingleBrandV1 brand={brand} key={brand.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandV1;