"use client";
import React, { useEffect, useState } from "react";
import BlogSingleWithSidebarContent from "@/components/blog/BlogSingleWithSidebarContent";
import LayoutStyle2 from "@/components/layouts/LayoutStyle2";
import { firestore } from "../../../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Spinner from "@/components/spinner/Spinner";

const BlogSingleWithSidebar = ({ params }) => {
  const { id } = params;
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogByLink = async () => {
      try {
        const q = query(
          collection(firestore, "blogs"),
          where("link", "==", id)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const blogDoc = querySnapshot.docs[0].data();
          setBlogData(blogDoc);
        } else {
          console.error("No blog found with this link");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlogByLink();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!blogData) {
    return <div>No blog found with this link</div>;
  }

  return (
    <>
      <LayoutStyle2 pageTitle={blogData.title} breadCrumb="artikel">
        <BlogSingleWithSidebarContent blogData={blogData} />
      </LayoutStyle2>
    </>
  );
};

export default BlogSingleWithSidebar;
