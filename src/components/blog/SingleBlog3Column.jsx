import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlog3Column = ({ blog }) => {
    const { id, thumb, author, date, title, btnText, btnIcon } = blog

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} width={800} height={600} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link href="#" scroll={false}>{author}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h2 className="post-title">
                        <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                    </h2>
                    <Link href={`/blog-single-with-sidebar/${id}`} className="button-regular">{btnText}<i className={btnIcon}></i></Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;