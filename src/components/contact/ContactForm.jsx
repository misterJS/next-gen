"use client";
import React from 'react';
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

const ContactForm = () => {

    const addDataToProjects = async (data) => {
        try {
            const docRef = await addDoc(collection(firestore, "projects"), data);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            toast.error("Failed to submit. Please try again.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const comments = event.target.comments.value;

        const formData = { name, email, phone, comments };

        await addDataToProjects(formData);

        event.target.reset();
        toast.success("Thanks for your Message");
    };

    return (
        <>
            <form className="contact-form contact-form mt-30" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control no-arrows" id="phone" name="phone" placeholder="Phone Number" type="number" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" autoComplete='off' required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            <i className="fas fa-paper-plane"></i> Get in Touch
                        </button>
                    </div>
                </div>
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;