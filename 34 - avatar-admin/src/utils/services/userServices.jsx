import axiosInstance from '../axiosInstance/axiosInstance'
import toast from 'react-hot-toast'

// FETCH USERS
const fetchAllUsers = async (payload) => {
  let { page, items_per_page } = payload
  try {
    const response = await axiosInstance.get(
      `/getalluser?items_per_page=${items_per_page}&pg=${page}`,
    )
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

// FETCH USER BY ID
const fetchUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/user/${id}`)
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

// DELETE USER BY ID
const deleteUserById = async (id) => {
  try {
    const response = await axiosInstance.delete(`/user-delete/${id}`)
    return response.data
  } catch (error) {

    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}
// SEARCH USER BY USERNAME AND EMAIL
const searchUser = async (query) => {
  try {
    const response = await axiosInstance.get(`/user-search?query=${query}`)
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
      toast.error(error.response.data.message)
    }
    toast.error(error.response.message)
  }
}
export default fetchAllUsers
export { fetchUserById, deleteUserById, searchUser }
