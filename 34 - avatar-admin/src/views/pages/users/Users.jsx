import './Users.css'
import React, { useEffect, useState } from 'react'
import { Table, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Loader from '../../../components/loader/Loader'
import FormSearch from '../../../components/form_search/FormSearch'
import Pagination from '../../../components/pagination_common/Pagination'
import fetchAllUsers, { deleteUserById, searchUser } from '../../../utils/services/userServices'

const Users = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [totalPages, setTotalPages] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const navigate = useNavigate()


  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const response = await fetchAllUsers({ page: currentPage, items_per_page: itemsPerPage })
      setLoading(false)
      if (response?.success) {
        setUserData(response.data)
        setTotalPages(Math.ceil(response.total_items / itemsPerPage))
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error('Failed to load dashboard data')
    }
  }
  // Handle search form submission
  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    setCurrentPage(1)

    // Get the search value from the input
    let search = e.target[0].value

    try {
      if (search === '') {
        // If search input is empty, fetch all users
        await fetchDashboardData()
      } else {
        // Otherwise, perform the search
        let res = await searchUser(search)
        if (res?.success) {
          setUserData(res.data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [currentPage, itemsPerPage])

  const viewSingleUser = (id) => {
    navigate(`/admin/users/${id}`)
  }

  const DeleteUserById = async (userId) => {
    try {
      setLoading(true)
      const response = await deleteUserById(userId)
      if (response?.success) {
        fetchDashboardData()
        toast.success('User deleted successfully')
      }
    } catch (error) {
      console.log(error)
      toast.error('Error deleting user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="heading-and-search-form">
        <h2>Users</h2>
        <FormSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="table-container">
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.length !== 0 ? (
              userData.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td className="actions">
                    <Button variant="primary" size="sm" onClick={() => viewSingleUser(user.id)}>
                      View
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => DeleteUserById(user.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <Alert variant="warning">No Users Found!</Alert>
            )}
          </tbody>
        </Table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(value) => {
          setCurrentPage(1)
          setItemsPerPage(value)
        }}
      />

      {loading && <Loader />}
    </>
  )
}

export default Users
