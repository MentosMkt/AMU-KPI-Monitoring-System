import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './Pages/Authentication/LandingPage';

import VicePresidentDashboard from './Pages/Vice President/VicePresidentDashboard';
import HigherOfficeDashboard from './Pages/Higher Office/HigherOfficeDashboard';
import FaculityDashboard from './Pages/Faculity/FaculityDashboard';
import ChairDashboard from './Pages/Chairs/ChairDashboard';
import StaffDashboard from './Pages/Staff/StaffDashboard';
import SignIn from './Pages/Authentication/LoginPage';
import NotFoundPage from './Pages/PageNotFound/PageNotFound';
import UserManagment from './Pages/Admin/User-Managment/UserManagment';
import Admin from './Pages/Admin/Admin';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import KpiManagement from './Pages/Admin/KPI/Kpi';
import RoleManagement from './Pages/Admin/RoleManagement/RoleManagement';
import Configuration from './Pages/Admin/Configuration/Configuration';
import AlertsNotifications from './Pages/Admin/Notification/AlertsNotification';
import PermissionManagement from './Pages/Admin/Permissions/PermissonsManagement';
import UserProfile from './Pages/Profile/UserProfile';



import Dashboard from './Pages/STRATEGICC/Dashboard';
import UniversityKpis from './Pages/STRATEGICC/UniversityKpis';
import Strategic from './Pages/STRATEGICC/Strategic';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidden bg-background text-foreground">
        <div className="flex-1 flex min-h-0 bg-background">
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Staff */}
            <Route path="/staff" element={<StaffDashboard />} />

            {/* Department Chair */}
            <Route path="/department-chair" element={<ChairDashboard />} />

            {/* Faculty Admin */}
            <Route path="/faculty-admin" element={<FaculityDashboard />} />

            {/* Higher Institution */}
            <Route path="/higher-institution" element={<HigherOfficeDashboard />} />

            {/* Vice President */}
            <Route path="/vice-president" element={<VicePresidentDashboard />} />

            {/* Strategic Office */}
            <Route path="/strategic-office" element={<Strategic />}>
              <Route index element={<Dashboard />} />
              <Route path="university-kpis" element={<UniversityKpis />} />
            </Route>

            {/* Admin (if still needed separately) */}
            <Route path="/admin" element={<Admin />}>
              <Route index element={<AdminDashboard />} />
              <Route path="user-management" element={<UserManagment />} />
              <Route path="role-management" element={<RoleManagement />} />
              <Route path="kpi" element={<KpiManagement />} />
              <Route path="configuration" element={<Configuration />} />
              <Route path="alert-notification" element={<AlertsNotifications />} />
              <Route path="permission" element={<PermissionManagement />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
