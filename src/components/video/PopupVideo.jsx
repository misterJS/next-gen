"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const PopupVideo = ({ videoClass, children, videoId }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
            <Link className={`${videoClass}`} onClick={() => setOpen(true)} href="#" scroll={false}>
                {children}
            </Link>
        </>
    );
};

export default PopupVideo;