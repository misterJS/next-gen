"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxData from '@/assets/jsonData/parallax/ParallaxData.json'
import SingleParallaxItem from './SingleParallaxItem';

gsap.registerPlugin(ScrollTrigger);

const ParallaxContainer = () => {
    const parallaxContainerRef = useRef(null);
    const parallaxItemsRef = useRef(null);

    useEffect(() => {
        class Scroll {
            constructor() {
                this.sections = null;
                this.page = null;
                this.main = null;
                this.scrollTrigger = null;
                this.tl = null;
                this.win = null;

                this.init = this.init.bind(this);
                this.setupScrollTrigger = this.setupScrollTrigger.bind(this);
                this.setupTimeline = this.setupTimeline.bind(this);
                this.onResize = this.onResize.bind(this);
                this.reset = this.reset.bind(this);
                this.getTotalScroll = this.getTotalScroll.bind(this);
            }

            init() {
                this.sections = document.querySelectorAll('section');
                this.page = parallaxContainerRef.current;
                this.main = parallaxItemsRef.current;
                this.win = {
                    w: window.innerWidth,
                    h: window.innerHeight,
                };

                this.setupTimeline();
                this.setupScrollTrigger();
                window.addEventListener('resize', this.onResize);
            }

            setupScrollTrigger() {
                this.page.style.height = `${this.getTotalScroll() + this.win.h}px`;

                this.scrollTrigger = ScrollTrigger.create({
                    id: 'mainScroll',
                    trigger: '.parallax-items',
                    animation: this.tl,
                    pin: true,
                    scrub: true,
                    snap: {
                        snapTo: (value) => {
                            let labels = Object.values(this.tl.labels);
                            const snapPoints = labels.map((x) => x / this.tl.totalDuration());
                            const proximity = 0.1;

                            for (let i = 0; i < snapPoints.length; i++) {
                                if (value > snapPoints[i] - proximity && value < snapPoints[i] + proximity) {
                                    return snapPoints[i];
                                }
                            }
                        },
                        duration: { min: 0.2, max: 0.6 },
                    },
                    start: 'top top',
                    end: `+=${this.getTotalScroll()}`,
                });
            }

            setupTimeline() {
                this.tl = gsap.timeline();
                this.tl.addLabel('label-initial');

                this.sections.forEach((section, index) => {
                    const nextSection = this.sections[index + 1];
                    if (!nextSection) return;

                    this.tl
                        .to(nextSection, {
                            y: -1 * nextSection.offsetHeight,
                            duration: nextSection.offsetHeight,
                            ease: 'linear',
                        })
                        .addLabel(`label${index}`);
                });
            }

            onResize() {
                this.win = {
                    w: window.innerWidth,
                    h: window.innerHeight,
                };

                this.reset();
            }

            reset() {
                if (typeof ScrollTrigger.getById('mainScroll') === 'object') {
                    ScrollTrigger.getById('mainScroll').kill();
                }

                if (typeof this.tl === 'object') {
                    this.tl.kill();
                    this.tl.seek(0);
                }

                document.body.scrollTop = document.documentElement.scrollTop = 0;
                this.init();
            }

            getTotalScroll() {
                let totalScroll = 0;
                this.sections.forEach((section) => {
                    totalScroll += section.offsetHeight;
                });
                totalScroll -= this.win.h;
                return totalScroll;
            }
        }

        const scrollInstance = new Scroll();
        scrollInstance.init();

        return () => {
            window.removeEventListener('resize', scrollInstance.onResize);
            if (scrollInstance.scrollTrigger) {
                scrollInstance.scrollTrigger.kill();
            }
            if (scrollInstance.tl) {
                scrollInstance.tl.kill();
            }
        };
    }, []);

    return (
        <>
            <div className="scroll-parallax-area text-light">
                <div className="parallax-container" ref={parallaxContainerRef}>
                    <div className="preview">
                        <div className="preview__wrapper">
                            <span className="cursor cursor-hover"><i className="fas fa-arrow-right"></i></span>
                            <div className="parallax-items" ref={parallaxItemsRef}>
                                {ParallaxData.map(data =>
                                    <SingleParallaxItem data={data} key={data.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParallaxContainer;
