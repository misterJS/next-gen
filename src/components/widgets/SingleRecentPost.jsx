"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleRecentPost = ({ blog }) => {
  const { link, imageUrl, title, createdAt } = blog;

  const formattedDate = createdAt?.seconds
    ? new Date(createdAt.seconds * 1000).toLocaleDateString()
    : createdAt;

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
          <Link href={`/blog/${link}`}>
            <Image src={imageUrl} width={500} height={500} alt={link} />
          </Link>
        </div>
        <div className="info">
          <div className="meta-title">
            <span className="post-date">{formattedDate}</span>
          </div>
          <Link href={`/blog/${link}`}>{truncatedTitle}</Link>
        </div>
      </li>
    </>
  );
};

export default SingleRecentPost;
