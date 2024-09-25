"use client";
import React, { useState, useEffect } from "react";
import SingleBlog3Column from "./SingleBlog3Column";
import Pagination from "../pagination/Pagination";
import { firestore } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Spinner from "../spinner/Spinner";

const Blog3ColumnContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6); // Number of blogs per page

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "blogs"));
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Get current blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="blog-area blog-grid-colum default-padding">
        <div className="container">
          <div className="row">
            {currentBlogs.map((blog) => (
              <div className="col-lg-4 col-md-6 mb-50" key={blog.id}>
                <SingleBlog3Column blog={blog} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12 pagi-area text-center">
              <Pagination
                currentPage={currentPage}
                totalBlogs={blogs.length}
                blogsPerPage={blogsPerPage}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog3ColumnContent;
