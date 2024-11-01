import './Avatars.css'
import React, { useEffect, useState, useRef } from 'react'
import { Button, Alert, Modal, Table, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/loader/Loader'
import FormSearch from '../../../components/form_search/FormSearch'
import LocateAvatars from '../../../components/locate_avatars/LocateAvatars'
import fetchAvatars, {
  deleteAvatarById,
  searchAvatar,
} from '../../../utils/services/avatarServices'
import toast from 'react-hot-toast'
import Pagination from '../../../components/pagination_common/Pagination'

const Avatars = () => {
  const [avatarData, setAvatarData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [totalPages, setTotalPages] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const filtereddata  = avatarData.filter((avt)=>avt.isAvatarApproved===true);
  console.log(filtereddata,'jksdjf');
  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const response = await fetchAvatars({ page: currentPage, items_per_page: itemsPerPage })
      setLoading(false)
      if (response?.success) {
        console.log(response)
        setAvatarData(response.data)
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
        let res = await searchAvatar(search)
        if (res?.success) {
          setAvatarData(res.data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [currentPage, itemsPerPage])

  const viewSingleAvatar = (id) => {
    navigate(`/admin/avatars/${id}`)
  }

  const DeleteAvatarById = async (userId) => {
    try {
      setLoading(true)
      const response = await deleteAvatarById(userId)
      if (response?.success) {
        fetchDashboardData()
        toast.success('Avatar deleted successfully')
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
      <LocateAvatars />
      <div className="heading-and-search-form">
        <h2>Avatars</h2>
        <FormSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {avatarData.length !== 0 ? (
        <>
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
                {filtereddata.map((avatar) => {
                  console.log(avatar)
                  return (
                    <tr key={avatar._id}>
                      <td>{avatar._id}</td>
                      <td>{avatar.userName}</td>
                      <td>{avatar.email}</td>
                      <td className="actions">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => viewSingleAvatar(avatar._id)}
                        >
                          View
                        </Button>
                        {/* <Button variant="secondary" size="sm">
                          Edit
                        </Button> */}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => DeleteAvatarById(avatar._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </>
      ) : (
        <Alert variant="warning">No Avatar Found!</Alert>
      )}
      <></>
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

export default Avatars
