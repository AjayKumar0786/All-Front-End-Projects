import axiosInstance from '../axiosInstance/axiosInstance'
import toast from 'react-hot-toast'
// FETCH EXPERIENCES
const fetchAllExperiences = async (payload) => {
  let { page, items_per_page } = payload
  try {
    const response = await axiosInstance.get(
      `/getallexperience?items_per_page=${items_per_page}&pg=${page}`,
    )
    return response.data
  } catch (error) {
    console.error(`Error getting users: ${error}.`)
    throw new Error(`Error getting users: ${error}.`)
  }
}

// FETCH EXPERIENCE BY ID
const fetchExperienceById = async (id) => {
  try {
    const response = await axiosInstance.get(`/experience/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error getting user: ${error}.`)
    throw new Error(`Error getting user: ${error}.`)
  }
}

// DELETE EXPERIENCE BY ID
const deleteExperienceById = async (id) => {
  try {
    const response = await axiosInstance.delete(`/experience-delete/${id}`)
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}

const searchExperience = async (query) => {
  try {
    const response = await axiosInstance.get(`/experience-search?query=${query}`)
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}
export default fetchAllExperiences
export { fetchExperienceById, deleteExperienceById, searchExperience }
