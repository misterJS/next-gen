import SingleBlogStandard from '@/components/blog/SingleBlogStandard';
import ArchiveWidget from '@/components/widgets/ArchiveWidget';
import CategoryWidget from '@/components/widgets/CategoryWidget';
import FollowWidget from '@/components/widgets/FollowWidget';
import GalleryWidget from '@/components/widgets/GalleryWidget';
import RecentPostsWidget from '@/components/widgets/RecentPostsWidget';
import SearchWidget from '@/components/widgets/SearchWidget';
import TagsWidget from '@/components/widgets/TagsWidget';
import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import Pagination from '@/components/pagination/Pagination';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';

export const metadata = {
    title: "Dwi Panca Ekatama - Solusi Industri Terpercaya - Blog With Sidebar"
};

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Blog Sidebar" breadCrumb="blog-sidebar">
                <div className="blog-area full-blog default-padding">
                    <div className="container">
                        <div className="blog-items">
                            <div className="row">
                                <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                    <div className="blog-item-box">
                                        {blogData.slice(0, 3).map(blog =>
                                            <SingleBlogStandard blog={blog} key={blog.id} />
                                        )}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 pagi-area text-center">
                                            <Pagination />
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                    <aside>
                                        <SearchWidget />
                                        <RecentPostsWidget />
                                        <CategoryWidget />
                                        <GalleryWidget />
                                        <ArchiveWidget />
                                        <FollowWidget />
                                        <TagsWidget />
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutStyle2>
        </>
    );
};

export default BlogWithSidebarPage;