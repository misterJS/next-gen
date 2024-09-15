import BlogSingleContent from '@/components/blog/BlogSingleContent';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Blog Single"
};

const BlogSinglePage = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Blog Single" breadCrumb="blog-single" hasOffset="offset-lg-1">
                <BlogSingleContent />
            </LayoutStyle2>
        </>
    );
};

export default BlogSinglePage;