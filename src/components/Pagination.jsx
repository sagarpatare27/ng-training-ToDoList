// import React from 'react';

// const Pagination = ({ tasksPerPage, totalTasks, paginate, currentPage }) => {
//   const pageNumbers = [];


//   for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination justify-content-center">
//         {pageNumbers.map(number => (
//           <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
//             <a onClick={() => paginate(number)} href="#" className="page-link">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

// Pagination.js
import React from 'react';

const Pagination = ({ tasksPerPage, totalTasks, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(1)}>First</button>
        </li>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
        </li>

        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}

        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
        </li>
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(pageNumbers.length)}>Last</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
