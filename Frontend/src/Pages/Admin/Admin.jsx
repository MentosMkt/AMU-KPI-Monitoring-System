import Sidebar from '../../Components/Dashboard/Sidebar';
import Navbar from '../../Components/UI/Navbar';
import { Outlet } from 'react-router-dom';
// import Sidebar from "../Strategic/StrategicComponents/Sidebar";

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-background w-full ">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
