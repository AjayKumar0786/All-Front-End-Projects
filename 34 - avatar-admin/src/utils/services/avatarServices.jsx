import axiosInstance from '../axiosInstance/axiosInstance'
import toast from 'react-hot-toast'

// FETCH AVATARS
const fetchAvatars = async (payload) => {
  let { page, items_per_page } = payload

  try {
    const response = await axiosInstance.get(
      `/getallavatar?items_per_page=${items_per_page}&pg=${page}`,
    )
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

// FETCH AVATAR BY ID
const fetchAvatarById = async (id) => {
  try {
    const response = await axiosInstance.get(`/avatar/${id}`)
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

// DELETE AVATAR BY ID
const deleteAvatarById = async (id) => {
  try {
    const response = await axiosInstance.delete(`/avatar-delete/${id}`)
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

const searchAvatar = async (query) => {
  try {
    const response = await axiosInstance.get(`/user-search?query=${query}`)
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

export default fetchAvatars
export { fetchAvatarById, searchAvatar, deleteAvatarById }
