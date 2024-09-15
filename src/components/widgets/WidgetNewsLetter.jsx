"use client"
import React from 'react';
import { toast } from 'react-toastify';

const WidgetNewsLetter = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed to our Newsletter")
    }

    return (
        <>
            <div className="widget newsletter">
                <h4 className="title">Get Subscribed!</h4>
                <form onSubmit={handleEmail}>
                    <div className="input-group stylish-input-group">
                        <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" autoComplete='off' />
                        <span className="input-group-addon">
                            <button type="submit">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default WidgetNewsLetter;