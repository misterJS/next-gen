"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleRecentPost = ({ blog }) => {
    const { id, thumb, title, date } = blog

    const truncateString = (str) => {
        if (str.length <= 30) {
            return str;
        }
        return `${str.slice(0, 30)} ...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <>
            <li>
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} width={500} height={500} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta-title">
                        <span className="post-date">{date}</span>
                    </div>
                    <Link href={`/blog-single-with-sidebar/${id}`}>{truncatedTitle}</Link>
                </div>
            </li>
        </>
    );
};

export default SingleRecentPost;