import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - blog - artikel"
};

const Blog3Column = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Artikel" breadCrumb="artikel">
                <Blog3ColumnContent />
            </LayoutStyle2>
        </>
    );
};

export default Blog3Column;