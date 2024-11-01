import './Experiences.css'
import React, { useEffect, useState } from 'react'
import { Table, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Loader from '../../../components/loader/Loader'
import FormSearch from '../../../components/form_search/FormSearch.jsx'
import fetchAllExperiences, {
  deleteExperienceById,
  searchExperience,
} from '../../../utils/services/experienceServices.jsx'
import Pagination from '../../../components/pagination_common/Pagination.js'

const Experiences = () => {
  const [experienceData, setExperienceData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [totalPages, setTotalPages] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const navigate = useNavigate()

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const response = await fetchAllExperiences({
        page: currentPage,
        items_per_page: itemsPerPage,
      })
      setLoading(false)
      if (response?.success) {
        setExperienceData(response.data)
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
        let res = await searchExperience(search)
        if (res?.success) {
          setExperienceData(res.data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [currentPage, itemsPerPage])

  const viewSingleExperience = (id) => {
    navigate(`/admin/experiences/${id}`)
  }

  const DeleteExperienceByIdFunction = async (userId) => {
    try {
      setLoading(true)
      const response = await deleteExperienceById(userId)
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
        <h2>Experiences</h2>
        <FormSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <>
        <div className="table-container">
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar Name</th>
                <th>Experience Name</th>
                <th>Total Bookings</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            {experienceData.length !== 0 ? (
              <tbody>
                {experienceData.map((exp) => {
                  return (
                    <tr key={exp._id}>
                      <td>{exp._id}</td>
                      <td>{exp.avatarName}</td>
                      <td>{exp.ExperienceName}</td>
                      <td>{exp.Booking}</td>
                      <td>{exp.rating[0]}</td>
                      <td className="actions">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => viewSingleExperience(exp._id)}
                        >
                          View
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => DeleteExperienceByIdFunction(exp._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            ) : (
              <Alert variant="warning">No Experience Found!</Alert>
            )}
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
      </>

      {loading && <Loader />}
    </>
  )
}

export default Experiences
