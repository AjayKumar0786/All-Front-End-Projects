import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout, cilSpeedometer, cilUser, cilStar, cilUserPlus } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import toast from 'react-hot-toast'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/admin/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Avatars',
    to: '/admin/avatars',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Experiences',
    to: '/admin/experiences',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Requests',
    to: '/admin/requests',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  }

  
]

export default _nav
