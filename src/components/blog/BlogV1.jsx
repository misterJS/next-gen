import React from 'react';
import SingleBlogV1 from './SingleBlogV1';
import BlogData from '@/assets/jsonData/blog/BlogData.json';

const BlogV1 = () => {
    return (
        <>
            <div className="blog-area home-blog default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Berita & Acara</h4>
                                <h2 className="title">Artikel Terbaru</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogData.slice(0, 2).map(blog =>
                            <div className="col-xl-6 col-md-6 mb-30" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;
