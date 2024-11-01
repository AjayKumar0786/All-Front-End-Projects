import './PaginationCommon.css'
import Form from 'react-bootstrap/Form'
import React, { useRef } from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationCommon = ({ currentPage, totalPages, handlePageChange, handleRowsCount }) => {
  const selectRef = useRef()
  const handleChange = () => {
    handleRowsCount(selectRef.current.value)
  }
  return (
    <div className="pagination-container d-flex flex-wrap justify-content-between">
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      <Form.Select onChange={() => handleChange()} ref={selectRef}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Form.Select>
    </div>
  )
}

export default PaginationCommon
