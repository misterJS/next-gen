"use client";
import React from "react";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

const FooterNewsLetter = () => {
  const addDataToNewsletter = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(firestore, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  const handleEmail = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    if (!email) {
      toast.error("Please provide a valid email address.");
      return;
    }
    await addDataToNewsletter("newsletter", { email });
    event.target.reset();
    toast.success("Subscribed to our Newsletter");
  };

  return (
    <>
      <form onSubmit={handleEmail}>
        <input
          type="email"
          placeholder="Your Email"
          className="form-control"
          name="email"
          autoComplete="off"
          required
        />
        <button type="submit">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </>
  );
};

export default FooterNewsLetter;
