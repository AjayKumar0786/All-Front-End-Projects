import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10)
    onItemsPerPageChange(newItemsPerPage)
    onPageChange(1) // Reset to first page when items per page changes
  }

  return (
    <div
      className="pagination-container fixed bottom-0 w-full left-0 py-3"
      style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Pagination buttons - Align Left */}
          <div className="col-12 col-md-6 d-flex justify-content-start">
            <button
              className={`btn btn-outline-primary ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack className="text-xl" />
            </button>
            <span className="px-4 py-2 mx-1">
              Page: {currentPage} / {totalPages}
            </span>
            <button
              className={`btn btn-outline-primary ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>

          {/* Items per page selector - Align Right */}
          <div className="col-12 col-md-6 d-flex justify-content-end">
            <span className="mr-2 text-sm">Items per page:</span>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="form-select form-select-sm"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
