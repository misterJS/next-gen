import React from 'react';
import SingleBlogV2 from './SingleBlogV2';
import BlogData from '@/assets/jsonData/blog/BlogData.json'

const BlogV2 = () => {
    return (
        <>
            <div className="blog-area home-blog blog-style-two-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">News & Events</h4>
                                <h2 className="title">Latest blog posts </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogData.slice(5, 7).map(blog =>
                            <div className="col-lg-6 col-md-6 mb-30" key={blog.id}>
                                <SingleBlogV2 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV2;