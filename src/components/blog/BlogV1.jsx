"use client";
import React, { useEffect, useState } from "react";
import SingleBlogV1 from "./SingleBlogV1";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { firestore } from "../../../firebase"; // Make sure Firebase is properly initialized
import Spinner from "../spinner/Spinner";

const BlogV1 = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        // Query Firestore for the latest 2 blog posts
        const q = query(
          collection(firestore, "blogs"),
          orderBy("createdAt", "desc"),
          limit(2)
        );
        const querySnapshot = await getDocs(q);
        const blogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLatestBlogs(blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="blog-area home-blog default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Berita & Acara</h4>
                <h2 className="title">Artikel Terbaru</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {latestBlogs.map((blog) => (
              <div className="col-xl-6 col-md-6 mb-30" key={blog.id}>
                <SingleBlogV1 blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV1;
