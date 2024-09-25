"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SingleBlogComment from "./SingleBlogComment";
import BlogForm from "../form/BlogForm";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase"; // Make sure Firebase is configured properly
// import SearchWidget from "../widgets/SearchWidget";
import RecentPostsWidget from "../widgets/RecentPostsWidget";
// import GalleryWidget from "../widgets/GalleryWidget";
// import TagsWidget from "../widgets/TagsWidget";
// import CategoryWidget from "../widgets/CategoryWidget";
// import ArchiveWidget from "../widgets/ArchiveWidget";
// import SocialWidget from "../widgets/SocialWidget";
import SocialShareV2 from "../utilities/SocialShareV2";

const BlogSingleWithSidebarContent = ({ blogData }) => {
  const { imageUrl, createdAt, createdBy, quotes, link, tags, content } =
    blogData;

  const formattedDate = createdAt?.seconds
    ? new Date(createdAt.seconds * 1000).toLocaleDateString()
    : createdAt;

  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsQuery = query(
          collection(firestore, "comments"),
          where("linkArtikel", "==", link) // Fetch comments where the link matches the article
        );
        const querySnapshot = await getDocs(commentsQuery);
        const fetchedComments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(fetchedComments);
        setLoadingComments(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setLoadingComments(false);
      }
    };

    if (link) {
      fetchComments();
    }
  }, [link]);

  return (
    <>
      <div className="blog-area single full-blog right-sidebar full-blog default-padding">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                {/* BlogPostContent */}
                <div className="blog-style-one item">
                  <div className="blog-item-box">
                    <div className="thumb">
                      <Image
                        src={imageUrl}
                        alt={link}
                        width={1500}
                        height={755}
                      />
                    </div>
                    <div className="info">
                      <div className="meta">
                        <ul>
                          <li>
                            <i className="fas fa-user"></i>{" "}
                            <Link href="#" scroll={false}>
                              {createdBy}
                            </Link>
                          </li>
                          <li>
                            <i className="fas fa-calendar-alt"></i>{" "}
                            {formattedDate}
                          </li>
                        </ul>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                      <blockquote>{quotes}</blockquote>
                    </div>
                  </div>
                </div>

                {/* BlogPostAuthor */}
                <div className="post-author">
                  <div className="thumb">
                    <Image
                      src="/assets/img/team/9.jpg"
                      alt="Thumb"
                      width={800}
                      height={800}
                    />
                  </div>
                  <div className="info">
                    <h4>
                      <Link href="#" scroll={false}>
                        {createdBy}
                      </Link>
                    </h4>
                    <p>
                      Kami menyediakan solusi yang dirancang untuk mendukung
                      efisiensi dan pertumbuhan bisnis Anda, dengan layanan yang
                      meliputi pemeliharaan peralatan industri, kalibrasi, serta
                      solusi inovatif lainnya.
                    </p>
                  </div>
                </div>

                {/* BlogTagsShare */}
                <div className="post-tags share">
                  <div className="tags">
                    <h4>Tags: </h4>
                    {tags.map((tag, index) => (
                      <Link href="#" key={index} scroll={false}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="social">
                    <h4>Share:</h4>
                    <ul>
                      <SocialShareV2 />
                    </ul>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="blog-comments">
                  <div className="comments-area">
                    {/* Comments */}
                    <div className="comments-title">
                      <h3>{comments.length} Comments</h3>
                      <div className="comments-list">
                        {loadingComments ? (
                          <p>Loading comments...</p>
                        ) : (
                          comments.map((comment) => (
                            <SingleBlogComment
                              commentProps={comment}
                              key={comment.id}
                            />
                          ))
                        )}
                      </div>
                    </div>

                    <BlogForm link={link} fetchComments={fetchComments} />
                  </div>
                </div>
              </div>

              <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                <aside>
                  {/* <SearchWidget /> */}
                  <RecentPostsWidget />
                  {/* <CategoryWidget /> */}
                  {/* <GalleryWidget /> */}
                  {/* <ArchiveWidget /> */}
                  {/* <SocialWidget /> */}
                  {/* <TagsWidget /> */}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleWithSidebarContent;
