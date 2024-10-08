import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlogV1 = ({ blog }) => {
  const { imageUrl, link, createdBy, date, title } = blog;

  return (
    <>
      <div className="home-blog-style-one">
        <div className="thumb">
          <Link href={`/blogs/${link}`}>
            <Image src={imageUrl} alt={link} width={800} height={800} />
          </Link>
        </div>
        <div className="info">
          <div className="meta">
            <ul>
              <li>
                <Link href={`/blogs/${link}`} scroll={false}>
                  {createdBy}
                </Link>{" "}
              </li>
              <li>{date}</li>
            </ul>
          </div>
          <h4 className="post-title">
            <Link href={`/blogs/${link}`}>{title}</Link>
          </h4>
          <Link href={`/blogs/${link}`} className="button-regular">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlogV1;
