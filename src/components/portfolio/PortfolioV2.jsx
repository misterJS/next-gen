import React from 'react';
import PortfolioV1Data from '@/assets/jsonData/portfolio/PortfolioV1Data.json'
import SinglePortfolioV1 from './SinglePortfolioV1';

const PortfolioV2 = () => {
    return (
        <>
            <div className="portfolio-style-one-area default-padding">
                <div className="container">
                    <div className="row mt--50">
                        {PortfolioV1Data.slice(0, 4).map(portfolio =>
                            <div className="col-lg-6 item-center" key={portfolio.id}>
                                <SinglePortfolioV1 portfolio={portfolio} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV2;