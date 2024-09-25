import Link from 'next/link';
import React from 'react';

const Pagination = ({ currentPage, totalBlogs, blogsPerPage, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <Link href="#" className="page-link" onClick={() => paginate(currentPage - 1)}>
                            <i className="fas fa-angle-double-left"></i>
                        </Link>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                            <Link href="#" className="page-link" onClick={() => paginate(number)}>
                                {number}
                            </Link>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                        <Link href="#" className="page-link" onClick={() => paginate(currentPage + 1)}>
                            <i className="fas fa-angle-double-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Pagination;
