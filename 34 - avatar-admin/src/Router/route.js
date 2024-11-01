import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import DefaultDashboardLayout from '../components/DefaultModel/DefaultDashboardLayout';
import Dashboard from '../views/dashboard/Dashboard';
import Users from '../views/pages/users/Users';
import UserDetails from '../views/pages/user_details/UserDetails';
import Avatars from '../views/pages/avatars/Avatars';
import AvatarDetails from '../views/pages/avatar_details/AvatarDetails';
import Experiences from '../views/pages/experiences/Experiences';
import ExperienceDetails from '../views/pages/experience_details/ExperienceDetails';
import Requests from '../views/pages/requests/Requests';
import Profile from '../views/pages/profile/Profile';
import Login from '../views/pages/login/Login';
import ForgotPassword from '../views/pages/forgot_password/ForgotPassword';
import Page404 from '../views/pages/page404/Page404';
import RootFunction from './RootFunction';
import { getLocalStorage } from '../utils/LocalStorageUtils';
import Admin from '../views/pages/admin/admin';

const LoginProtected = ({ children }) => {
  const admin = getLocalStorage('token');
  return admin ? <Navigate to="/admin/dashboard" replace /> : children;
};

const DashboardProtected = ({ children }) => {
  const admin = getLocalStorage('token');
  return admin ? (
    <DefaultDashboardLayout>{children}</DefaultDashboardLayout>
  ) : (
    <Navigate to="/admin/login" replace />
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/admin" replace />, // Redirect from root to /admin
  },
  {
    path: '/admin',
    element: <RootFunction />,
    children: [
      {
        path: '', // Redirect from /admin to /admin/dashboard
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: '',
        element: (
          <DashboardProtected>
            <Outlet />
          </DashboardProtected>
        ),
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'users',
            element: <Users />,
          },
          {
            path: 'users/:userId',
            element: <UserDetails />,
          },
          {
            path: 'avatars',
            element: <Avatars />,
          },
          {
            path: 'avatars/:avatarId',
            element: <AvatarDetails />,
          },
          {
            path: 'experiences',
            element: <Experiences />,
          },
          {
            path: 'experiences/:experienceId',
            element: <ExperienceDetails />,
          },
          {
            path: 'requests',
            element: <Requests />,
          },
          {
            path: 'admin',
            element: <Admin/>,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: 'login',
        element: (
          <LoginProtected>
            <Login />
          </LoginProtected>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <LoginProtected>
            <ForgotPassword />
          </LoginProtected>
        ),
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);
