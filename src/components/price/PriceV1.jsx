import React from 'react';
import PriceV1Data from '@/assets/jsonData/price/PriceV1Data.json'
import Image from 'next/image';
import shape11 from '@/assets/img/shape/11.png'
import SinglePriceV1 from './SinglePriceV1';

const PriceV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`pricing-style-one-area default-padding-bottom bg-gray ${sectionClass}`}>
                <div className="shape-left-top">
                    <Image src={shape11} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="pricing-items">
                        <div className="row align-center">
                            <div className="col-xl-5 col-lg-4">
                                <h4 className="sub-title">Best Pricing</h4>
                                <h2 className="title">Affordable pricing. <br /> - checkout Now</h2>
                                <p>
                                    Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                </p>
                                <h5>Join today and get <strong>50%</strong> Off</h5>
                            </div>
                            <div className="col-xl-6 offset-xl-1 col-lg-7 offset-lg-1" >
                                {PriceV1Data.map(price =>
                                    <SinglePriceV1 price={price} key={price.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;