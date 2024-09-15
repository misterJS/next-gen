import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const SingleBlogComment = ({ comment }) => {
    const { commentReplay, thumb, name, icon, date, text } = comment

    return (
        <>
            <div className={`comment-item ${commentReplay}`}>
                <div className="avatar">
                    <Image src={`/assets/img/team/${thumb}`} alt="Author" width={500} height={500} />
                </div>
                <div className="content">
                    <div className="title">
                        <h5>{name}
                            <span className="reply">
                                <Link href="#" onClick={handleSmoothScroll}><i className={icon}></i> Reply</Link>
                            </span>
                        </h5>
                        <span>{date}</span>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleBlogComment;