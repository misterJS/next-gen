import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlogV2 = ({ blog }) => {
    const { id, thumb, day, month, author, comments, title, icon } = blog

    return (
        <>
            <div className="home-blog-two">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} alt="Image Not Found" width={800} height={600} />
                    </Link>
                    <div className="date">{day}<strong>{month}</strong></div>
                </div>
                <div className="info">
                    <div className="content">
                        <div className="meta">
                            <ul>
                                <li><Link href="#" scroll={false}>{author}</Link></li>
                                <li><Link href="#" scroll={false}>{comments}</Link></li>
                            </ul>
                        </div>
                        <h3 className="post-title"><Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link></h3>
                        <Link href={`/blog-single-with-sidebar/${id}`} className="button-regular">
                            Continue Reading <i className={icon}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV2;