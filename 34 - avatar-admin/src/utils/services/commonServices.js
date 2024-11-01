import axiosInstance from '../axiosInstance/axiosInstance'

const fetchAllLocation = async () => {
  try {
    const response = await axiosInstance.get('/getalllocation')
    return response.data
  } catch (error) {
    if (error.response.data.message == 'Invalid token') {
      localStorage.clear()
    }
    toast.error(error.response.data.message)
  }
}


export default fetchAllLocation