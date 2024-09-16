import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlogV1 = ({ blog }) => {
  const { id, thumb, author, date, title, icon } = blog;

  return (
    <>
      <div className="home-blog-style-one">
        <div className="thumb">
          {/* /blog-single-with-sidebar/${id} */}
          <Link href={`#`}>
            <Image
              src={`/assets/img/blog/${thumb}`}
              alt="Image Not Found"
              width={800}
              height={800}
            />
          </Link>
        </div>
        <div className="info">
          <div className="meta">
            <ul>
              <li>
                <Link href="#" scroll={false}>
                  {author}
                </Link>{" "}
              </li>
              <li>{date}</li>
            </ul>
          </div>
          <h4 className="post-title">
            <Link href={`#`}>{title}</Link>
          </h4>
          <Link
            href={`#`}
            className="button-regular"
          >
            Continue Reading <i className={icon}></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlogV1;
