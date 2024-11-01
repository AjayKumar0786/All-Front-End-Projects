import { useEffect } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import { getLocalStorage } from '../utils/LocalStorageUtils'

const RootFunction = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = getLocalStorage('token')

  useEffect(() => {
    // Perform redirection based on authentication status
    if (location.pathname === '/admin') {
      if (isAuthenticated) {
        navigate('/admin/dashboard', { replace: true })
      } else {
        navigate('/admin/login', { replace: true })
      }
    }
  }, [isAuthenticated, navigate, location.pathname])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default RootFunction
