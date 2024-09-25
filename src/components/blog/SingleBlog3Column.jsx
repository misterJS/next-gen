import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlog3Column = ({ blog }) => {
  const { link, imageUrl, createdBy, createdAt, title, btnIcon } = blog;

  const formattedDate = createdAt?.seconds
    ? new Date(createdAt.seconds * 1000).toLocaleDateString()
    : createdAt;

  return (
    <>
      <div className="blog-style-one">
        <div className="thumb">
          <Link href={`/blog/${link}`}>
            <Image src={imageUrl} width={800} height={600} alt={title} />
          </Link>
        </div>
        <div className="info">
          <div className="meta">
            <ul>
              <li>
                <Link href="#" scroll={false}>
                  {createdBy}
                </Link>
              </li>
              <li>{formattedDate}</li>
            </ul>
          </div>
          <h2 className="post-title">
            <Link href={`/blog/${link}`}>{title}</Link>
          </h2>
          <Link href={`/blog/${link}`} className="button-regular">
            selengkapnya<i className={btnIcon}></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlog3Column;
