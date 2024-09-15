import React from 'react';
import Count from '../count/Count';

const SingleFactV1 = ({ fact }) => {
    const { end, operator, info, delay } = fact

    return (
        <>
            <div className="fun-fact animate" data-animate="fadeInDown" delay={delay}>
                <div className="counter">
                    <div className="timer"><Count end={end} enableScrollSpy></Count></div>
                    <div className="operator">{operator}</div>
                </div>
                <span className="medium">{info}</span>
            </div>
        </>
    );
};

export default SingleFactV1;