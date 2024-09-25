import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner-wrapper">
            <div className="spinner"></div>
            <style jsx>{`
                .spinner-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 8px solid rgba(0, 0, 0, 0.1);
                    border-left-color: #4f46e5;
                    border-radius: 50%;
                    animation: spin 1.2s linear infinite;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Spinner;
