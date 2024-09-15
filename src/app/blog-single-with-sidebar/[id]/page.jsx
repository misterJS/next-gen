import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';
import BlogData from "@/assets/jsonData/blog/BlogData.json";

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Blog Single With Sidebar"
};

const BlogSingleWithSidebar = ({ params }) => {

    const { id } = params
    const data = BlogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutStyle2 pageTitle="Blog Single Sidebar" breadCrumb="blog-single-with-sidebar">
                <BlogSingleWithSidebarContent blogData={data} />
            </LayoutStyle2>
        </>
    );
};

export default BlogSingleWithSidebar;