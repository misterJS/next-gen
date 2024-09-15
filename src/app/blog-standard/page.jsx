import BlogStandardContent from '@/components/blog/BlogStandardContent';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Blog Standard"
};

const BlogStandardPage = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Blog Standard" breadCrumb="blog-standard">
                <BlogStandardContent />
            </LayoutStyle2>
        </>
    );
};

export default BlogStandardPage;