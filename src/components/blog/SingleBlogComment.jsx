import Image from "next/image";
import React from "react";

const SingleBlogComment = ({ commentProps }) => {
  const { commentReplay, name, createdAt, comment } = commentProps;
  const formattedDate = createdAt?.seconds
    ? new Date(createdAt.seconds * 1000).toLocaleDateString()
    : createdAt;

  return (
    <>
      <div className={`comment-item ${commentReplay}`}>
        <div className="avatar">
          <Image
            src={`/assets/img/icon/smartphone.png`}
            alt="Author"
            width={500}
            height={500}
          />
        </div>
        <div className="content">
          <div className="title">
            <h5>
              {name}
              {/* <span className="reply">
                                <Link href="#" onClick={handleSmoothScroll}><i className={icon}></i> Reply</Link>
                            </span> */}
            </h5>
            <span>{formattedDate}</span>
          </div>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

export default SingleBlogComment;
