import React from 'react'
import ServicePopularData from '@/assets/jsonData/services/ServicePopularData.json'
import SingleServicePopular from './SingleServicePopular';

const ServicePopular = () => {
    return (
        <>
            <div className="services-more mt-40">
                <h2 className="mb-20">Most popular services</h2>
                <div className="row">
                    {ServicePopularData.map(popular =>
                        <div className="col-md-6" key={popular.id} >
                            <SingleServicePopular popular={popular} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ServicePopular;