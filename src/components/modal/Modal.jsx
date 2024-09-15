"use client";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const Modal = ({ children }) => {
    const modalRef = useRef(null);
    const router = useRouter();

    function onHide() {
        router.back();
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onHide();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalRef]);

    return createPortal(
        <>
            <div className="popup-single-modal modal fade text-light show d-block" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content" ref={modalRef}>
                        <div className="modal-body">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}></button>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>,
        document.getElementById("modal-root-content")
    );
};

export default Modal;
