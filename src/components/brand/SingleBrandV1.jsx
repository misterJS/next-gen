import React from 'react';

const SingleBrandV1 = ({ brand }) => {
    const { department } = brand

    return (
        <>
            <div className="item">
                <h2>{department}</h2>
            </div>
        </>
    );
};

export default SingleBrandV1;