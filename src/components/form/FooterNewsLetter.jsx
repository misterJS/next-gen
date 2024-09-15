"use client"
import React from 'react';
import { toast } from 'react-toastify';

const FooterNewsLetter = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed to our Newsletter")
    }

    return (
        <>
            <form onSubmit={handleEmail}>
                <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' />
                <button type="submit"><i className="fas fa-arrow-right"></i></button>
            </form>
        </>
    );
};

export default FooterNewsLetter;