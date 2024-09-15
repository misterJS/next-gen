"use client"
import React from 'react';
import ModalVideo from 'react-modal-video';

const PopupVideo2 = ({ videoId, isVideoOpen, setIsVideoOpen }) => {

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isVideoOpen} videoId={videoId} onClose={() => setIsVideoOpen(false)} />
        </>
    );
};

export default PopupVideo2;