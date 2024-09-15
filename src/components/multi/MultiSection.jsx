"use client"
import React, { useEffect } from 'react';
import shape1 from '@/assets/img/shape/bg-shape-1.png'
import Image from 'next/image';
import AwardsV1 from '../awards/AwardsV1';
import EnterpriseV1 from '../enterprise/EnterpriseV1';
import ProjectIdeaV1 from '../project/ProjectIdeaV1';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MultiSection = () => {

    useEffect(() => {
        const width = window.innerWidth;

        if (width > 1023) {
            gsap.registerPlugin(ScrollTrigger);
            const sections = gsap.utils.toArray('.panel');

            const container = document.querySelector('.thecontainer');
            if (container) {
                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.thecontainer',
                        pin: true,
                        scrub: 1,
                        end: () => '+=' + container.offsetWidth,
                    },
                });
            }
        }
    }, []);

    return (
        <>
            <div className="multi-section overflow-hidden bg-dark-secondary text-light">
                <div className="bg-shape-top">
                    <Image src={shape1} alt="Image Not Found" />
                </div>

                <div className="thecontainer">
                    <div className="panel overflow-hidden">
                        <AwardsV1 />
                    </div>
                    <div className="panel overflow-hidden bg-gradient">
                        <EnterpriseV1 />
                    </div>
                    <div className="panel contact-panel overflow-hidden">
                        <ProjectIdeaV1 />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MultiSection;