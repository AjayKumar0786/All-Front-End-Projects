import toast from 'react-hot-toast'
import axiosInstance from '../axiosInstance/axiosInstance'
// FETCH USERS
const fetchAllRequest = async (payload) => {
  let { page, items_per_page } = payload
  try {
    const response = await axiosInstance.get(
      `/getallrequest?items_per_page=${items_per_page}&pg=${page}`,
    )
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

// DELETE USER BY ID
const updateRequestById = async (payload) => {
  try {
    const response = await axiosInstance.patch('/update-request-status', payload)
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

export default fetchAllRequest
export { updateRequestById }
