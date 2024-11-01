import axios from 'axios'
import { getLocalStorage } from '../LocalStorageUtils'

const axiosInstance = axios.create({
  baseURL: 'https://avatarbackend.onrender.com/admin',
  // baseURL: 'http://localhost:3000/admin',
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorage('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}` // Add Bearer prefix
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.href = '/admin/login'
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
