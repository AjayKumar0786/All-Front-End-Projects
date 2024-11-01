import './FormSearch.css'
import React from 'react'
import { Form, Button } from 'react-bootstrap'

const FormSearch = ({ searchQuery, setSearchQuery, handleSearchSubmit, setCurrentPage }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }
  return (
    <Form onSubmit={handleSearchSubmit} className="form-search">
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  )
}

export default FormSearch
