import classes from './Pagination.module.css';
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

    let [currentPage, setCurrentPage] = useState<number>(1);

    function handlePrev() {
        if (currentPage > 1) {
            setCurrentPage(--currentPage);
            paginate(currentPage);
            console.log(`[handlePrev] currentPage: ${currentPage}`);
        }
    }
    function handleNext() {
        if (currentPage < pageNumbers.length) {

            setCurrentPage(++currentPage);
            paginate(currentPage);
            console.log(`[handleNext] currentPage: ${currentPage}`);

        }
    }
    function handleClick(num: number) {
        paginate(num);
        setCurrentPage(num);

    }


    let activeClass = "";

    return (
        <nav>
            totalPosts: {totalPosts}
            <ul className='pagination'>
                <li className='page-item'>
                    <a onClick={() => handlePrev()} href='!#' className='page-link'>
                        prev
                        </a>
                </li>
                {pageNumbers.slice(currentPage - 2 <= 0 ? 0 : currentPage - 2, currentPage + 1).map(number => {

                    if (number === currentPage)
                        activeClass = classes.active;
                    else
                        activeClass = "";
                    return (
                        <li key={number} className='page-item'>
                            <a onClick={() => { handleClick(number) }}
                                href='!#' className={'page-link ' + activeClass}>
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
