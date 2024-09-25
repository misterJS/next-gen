"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

const BlogForm = (blogProps) => {
  const { link } = blogProps;
  const [loading, setLoading] = useState(false);

  const handleComment = async (event) => {
    event.preventDefault();
    setLoading(true);

    const name = event.target.name.value;
    const email = event.target.email.value;
    const comment = event.target.comment.value;
    const linkArtikel = link;

    try {
      await addDoc(collection(firestore, "comments"), {
        name,
        email,
        comment,
        linkArtikel,
        createdAt: new Date(),
      });

      toast.success("Thanks for your Comment");
      event.target.reset();
    } catch (error) {
      console.error("Error adding comment: ", error);
      toast.error("Failed to submit comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="comments-form">
        <div className="title">
          <h3>Leave a comments</h3>
        </div>
        <form className="contact-comments" onSubmit={handleComment}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="name"
                  className="form-control"
                  placeholder="Name *"
                  type="text"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email *"
                  type="email"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  placeholder="Comment"
                  autoComplete="off"
                  name="comment"
                  required
                />
              </div>
              <div className="form-group full-width submit">
                <button
                  className="btn dark border"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Posting..." : "Post Comment"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogForm;
