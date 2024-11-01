import AppSidebar from '../AppSidebar';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import { Outlet } from 'react-router-dom';

const DefaultDashboardLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1 p-4">
          <Outlet />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultDashboardLayout;
