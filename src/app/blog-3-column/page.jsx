import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Blog 3 Column"
};

const Blog3Column = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Blog 3 Column" breadCrumb="blog-3-column">
                <Blog3ColumnContent />
            </LayoutStyle2>
        </>
    );
};

export default Blog3Column;