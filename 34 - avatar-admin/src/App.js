import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useColorModes } from '@coreui/react'
import './scss/style.scss'
import { router } from './Router/route'
import DefaultDashboardLayout from './components/DefaultModel/DefaultDashboardLayout'

const App = ({ children }) => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, [])

  return (
    <>
      <Toaster />

      <RouterProvider router={router}>
        {' '}
       {children}
      </RouterProvider>
    </>
  )
}

export default App
