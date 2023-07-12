//PAGINATION WITH ALL THE NUMBERS

// import PropTypes from 'prop-types';
// import "../../scss/sections/components/_pagination.scss";

// export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pageNumbers.push(i)
//     }

//     const handlePreviousClick = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNextClick = () => {
//         if (currentPage < pageNumbers.length) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     return (
//         <nav className="">
//             <ul className="pagination">
//                 <li className="page-item">
//                     <button className="page-link" aria-disabled="true" onClick={handlePreviousClick}>Previous</button>
//                 </li>
//                 {pageNumbers.map(number => (
//                     <li key={number} className="page-item" path="true">
//                         <a onClick={() => paginate(number)} className={`page-link ${currentPage === number ? "active" : ""}`}>
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//                 <li className="page-item">
//                     <button className="page-link" onClick={handleNextClick}>Next</button>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// Pagination.propTypes = {
//     postsPerPage: PropTypes.number.isRequired,
//     totalPosts: PropTypes.number.isRequired,
//     paginate: PropTypes.func.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     setCurrentPage: PropTypes.func.isRequired,
// }

//PAGINATION WITH SOME NUMBERS

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import "../../scss/sections/components/_pagination.scss";

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) {
    const [visiblePageNumbers, setVisiblePageNumbers] = useState([]);

    useEffect(() => {
        const startIndex = Math.max(1, currentPage - 1);
        const endIndex = Math.min(startIndex + 2, Math.ceil(totalPosts / postsPerPage));
        const numbers = Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i);
        setVisiblePageNumbers(numbers);
    }, [currentPage, totalPosts, postsPerPage]);

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < Math.ceil(totalPosts / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <nav className="my-5">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link p-3" aria-label="Previous" onClick={handlePreviousClick}>
                        <span aria-hidden="true" className='p-3'>&laquo;</span>
                    </button>
                </li>
                {visiblePageNumbers.map((number) => (
                    <li key={number} className="page-item" path="true">
                        <button onClick={() => paginate(number)} className={`page-link p-3 ${currentPage === number ? "active" : ""}`}>
                            {number}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button className="page-link p-3" aria-label="Next" onClick={handleNextClick}>
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    postsPerPage: PropTypes.number.isRequired,
    totalPosts: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};
