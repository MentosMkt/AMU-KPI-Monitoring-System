import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import LandingPage from "./Pages/Authentication/LandingPage";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import StrategicDashboard from "./Pages/Strategic/StrategicDashboard";
import VicePresidentDashboard from "./Pages/Vice President/VicePresidentDashboard";
import HigherOfficeDashboard from "./Pages/Higher Office/HigherOfficeDashboard";
import FaculityDashboard from "./Pages/Faculity/FaculityDashboard";
import ChairDashboard from "./Pages/Chairs/ChairDashboard";
import StaffDashboard from "./Pages/Staff/StaffDashboard";
import SignIn from "./Pages/Authentication/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidde">
        <Navbar />
        <div className="flex-1 flex  min-h-0 bg-red-600">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/Strategic" element={<StrategicDashboard />} />
            <Route path="/Vp" element={<VicePresidentDashboard />} />
            <Route path="/HO" element={<HigherOfficeDashboard />} />
            <Route path="/Faculity" element={<FaculityDashboard />} />
            <Route path="/chair" element={<ChairDashboard />} />
            <Route path="/staff" element={<StaffDashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
