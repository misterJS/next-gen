import Blog2ColumnContent from '@/components/blog/Blog2ColumnContent';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Blog 2 Column"
};

const Blog2Column = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Blog 2 Column" breadCrumb="blog-2-column">
                <Blog2ColumnContent />
            </LayoutStyle2>
        </>
    );
};

export default Blog2Column;