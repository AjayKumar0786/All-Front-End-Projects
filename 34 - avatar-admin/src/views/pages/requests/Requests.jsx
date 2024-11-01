import { useEffect, useState } from 'react'
import './Request.css'
import Button from 'react-bootstrap/Button'
import Pagination from '../../../components/pagination_common/Pagination'
import Loader from '../../../components/loader/Loader'
import toast from 'react-hot-toast'
import fetchAllRequest, { updateRequestById } from '../../../utils/services/requestService'
import { Alert } from 'react-bootstrap'

const Requests = () => {
  const [requestData, setRequestData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [totalPages, setTotalPages] = useState(1)
  const fetchReqestData = async () => {
    try {
      setLoading(true)
      const response = await fetchAllRequest({ page: currentPage, items_per_page: itemsPerPage })
      setLoading(false)
      if (response?.success) {
        console.log(response.data);
        setRequestData(response.data)
        setTotalPages(Math.ceil(response.total_items / itemsPerPage))
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error('Failed to load dashboard data')
    }
  }

  useEffect(() => {
    fetchReqestData()
  }, [currentPage, itemsPerPage])

  const updateRequest = async (id, status) => {
    let body = { requestId: id, status: status }

    try {
      let res = await updateRequestById(body)

      if (res?.success && status===true) {
        toast.success(res.message)
        fetchReqestData()
      }
      if(res?.success && status===false) {
        toast.error(res.message)
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {requestData.length !== 0 ? (
        <section className="requests">
          <h2>Avatar Requests</h2>
          {requestData.map((request) => {
         
            // Only render the request if both userName, email are available, and status is "Requested"
            if (request.userName && request.email && request.isAvatarApproved
               ===false) {
              return (
                <div className="requests-list mt-3" key={request._id}>
                  <div className="request d-flex mb-2">
                    <div className="r-name">
                      <h6 className="mb-0">{request.userName}</h6>
                    </div>
                    <div className="r-email">
                      <p className="mb-0">{request.email}</p>
                    </div>
                    <div className="r-email">
                      <p className="mb-0">{request.isAvatarApproved}</p>
                    </div>

                    <div className="r-actions">
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => updateRequest(request._id, true)}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => updateRequest(request._id, false)}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>
              )
            }
            return null // Return null if userName, email are not available, or status is not "Requested"
          })}
        </section>
      ) : (
        <Alert variant="warning">No Request Found!</Alert>
      )}

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

export default Requests
