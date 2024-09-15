import React from 'react';

const AwardsV1 = () => {
    return (
        <>
            <div className="container overflow-hidden">
                <div className="row align-center">
                    <div className="col-lg-4">
                        <div className="site-title">
                            <h4 className="sub-title">Award & Achivement </h4>
                            <h2 className="title">Awards &  Recognitions</h2>
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <div className="achivement-items">
                            <div className="achivement-grid">
                                <div className="achivement-item">
                                    <i className="fab fa-behance"></i>
                                    <h4>Behance Awards </h4>
                                </div>
                                <div className="achivement-item">
                                    <i className="fas fa-layer-group"></i>
                                    <h4>Design Awards</h4>
                                </div>
                            </div>
                            <div className="achivement-grid">
                                <div className="achivement-item">
                                    <i className="fab fa-laravel"></i>
                                    <h4>Programming Awards</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AwardsV1;