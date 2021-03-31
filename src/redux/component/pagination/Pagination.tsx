import React, { useState } from 'react';

interface Props {
    postsPerPage: number;
    totalPosts: number;
    paginate: (num: number) => void
}
const Pagination = ({ postsPerPage, totalPosts, paginate }: Props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [currentPage, setCurrentPage] = useState<number>(1);
    
    function handlePrev() {
        if ((currentPage - 1) > 0){
            paginate(currentPage - 1);
            setCurrentPage(currentPage - 1);
        }
    }
    function handleNext() {
        if ((currentPage + 1) <= totalPosts){
            paginate(currentPage + 1);
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <a onClick={() => handlePrev()} href='!#' className='page-link'>
                        prev
                        </a>
                </li>
                {pageNumbers.map(number => {
                    
                    return (
                        <li key={number} className='page-item'>
                            <a onClick={() => {paginate(number);setCurrentPage(number);}} href='!#' className='page-link'>
                                {number}
                            </a>
                        </li>
                    )
                })}
                <li className='page-item'>
                    <a onClick={() => handleNext()} href='!#' className='page-link'>
                        next
                        </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
