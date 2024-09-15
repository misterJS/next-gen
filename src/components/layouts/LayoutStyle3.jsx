import React from 'react';
import FooterV1 from '../footer/FooterV1';
import HeaderV4 from '../header/HeaderV4';
import BreadCrumb from '../breadCrumb/BreadCrumb';

const LayoutStyle3 = ({ children, breadCrumb, pageTitle, hasOffset }) => {
    return (
        <>
            <HeaderV4 />
            {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} pageTitle={pageTitle} hasOffset={hasOffset} />}
            {children}
            <FooterV1 logoWhite={false} />
        </>
    );
};

export default LayoutStyle3;