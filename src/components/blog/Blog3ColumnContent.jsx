import React from 'react';
import SingleBlog3Column from './SingleBlog3Column';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import Pagination from '../pagination/Pagination';

const Blog3ColumnContent = () => {
    return (
        <>
            <div className="blog-area blog-grid-colum default-padding">
                <div className="container">
                    <div className="row">
                        {blogData.slice(4, 10).map(blog =>
                            <div className="col-lg-4 col-md-6 mb-50" key={blog.id}>
                                <SingleBlog3Column blog={blog} />
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col-md-12 pagi-area text-center">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;