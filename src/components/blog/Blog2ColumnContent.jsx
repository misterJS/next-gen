import React from 'react';
import SingleBlog2Column from './SingleBlog2Column';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import Pagination from '../pagination/Pagination';

const Blog2ColumnContent = () => {
    return (
        <>
            <div className="blog-area blog-grid-colum default-padding">
                <div className="container">
                    <div className="row">
                        {blogData.map(blog =>
                            <div className="col-lg-6 mb-50" key={blog.id}>
                                <SingleBlog2Column blog={blog} />
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

export default Blog2ColumnContent;