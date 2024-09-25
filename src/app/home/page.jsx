import AboutV1 from '@/components/about/AboutV1';
import BannerV1 from '@/components/banner/BannerV1';
import BannerZoomV1 from '@/components/banner/BannerZoomV1';
import BlogV1 from '@/components/blog/BlogV1';
import BrandV1 from '@/components/brand/BrandV1';
import FactV1 from '@/components/fact/FactV1';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV1 from '@/components/header/HeaderV1';
import DarkLayout from '@/components/layouts/DarkLayout';
import PortfolioV1 from '@/components/portfolio/PortfolioV1';
import ServicesV1 from '@/components/services/ServicesV1';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';
import React from 'react';

export const metadata = {
    title: "Hydraulic Torque Wrench – Dwi Panca Bolting Solutions. - flange management - rental bolting"
  };

const Home1 = () => {
    return (
        <>
            <div className="wrapper">
                <div className="smooth-scroll-container">
                    <HeaderV1 logoWhite={true} />
                    <div className="viewport">
                        <BannerV1 />
                        <BannerZoomV1 />
                        <ServicesV1 />
                        <AboutV1 sectionClass="default-padding-bottom relative" />
                        <PortfolioV1 sectionClass="bg-gray" />
                        <FactV1 sectionClass="bg-gray" />
                        <BrandV1 sectionClass="bg-gradient text-light" />
                        <WhyChooseV1 sectionClass="bg-gray" />
                        <TestimonialV1 />
                        <BlogV1 />
                        <DarkLayout />
                    </div>
                    <FooterV1 logoWhite={true} />
                </div>
            </div>
        </>
    );
};

export default Home1;