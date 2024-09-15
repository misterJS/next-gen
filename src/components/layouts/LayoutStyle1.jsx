import React from 'react';
import HeaderV3 from '../header/HeaderV3';
import FooterV1 from '../footer/FooterV1';

const LayoutStyle1 = ({ children }) => {
    return (
        <>
            <HeaderV3 />
            {children}
            <FooterV1 logoWhite={true} />
        </>
    );
};

export default LayoutStyle1;