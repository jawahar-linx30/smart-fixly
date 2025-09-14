import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

//loading ani
import Loader from "./components/Loader";

//common pages
const Landing = lazy(() => import("./pages/common/Landing"));
const Logout = lazy(() => import("./pages/common/Logout"));

//auth pages
const CitizenLogin = lazy(() => import("./pages/auth/login/CitizenLogin"));
const StaffLogin = lazy(() => import("./pages/auth/login/StaffLogin"));
const AdminLogin = lazy(() => import("./pages/auth/login/AdminLogin"));

const CitizenRegister = lazy(() => import("./pages/auth/register/CitizenRegister"));
const StaffRegister = lazy(() => import("./pages/auth/register/StaffRegister"));
const AdminRegister = lazy(() => import("./pages/auth/register/AdminRegister"));

//citizen pages
const CitizenDashboard = lazy(() => import("./pages/citizen/CitizenDashboard"));
const Feedback = lazy(() => import("./pages/citizen/Feedback"));
const Notifications = lazy(() => import("./pages/citizen/Notifications"));
const Profile = lazy(() => import("./pages/citizen/Profile"));
const SubmitComplaint = lazy(() => import("./pages/citizen/SubmitComplaint"));
const TrackComplaint = lazy(() => import("./pages/citizen/TrackComplaint"));

//staff pages
const AssignedComplaints = lazy(() =>
  import("./pages/staff/AssignedComplaints")
);
const StaffDashboard = lazy(() => import("./pages/staff/StaffDashboard"));
const UpdateComplaints = lazy(() => import("./pages/staff/UpdateComplaints"));

//admin pages
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AllComplaints = lazy(() => import("./pages/admin/AllComplaints"));
const Analytics = lazy(() => import("./pages/admin/Analytics"));
const AssignComplaints = lazy(() => import("./pages/admin/AssignComplaints"));
const MonitorUpdates = lazy(() => import("./pages/admin/MonitorUpdates"));


function App() {
  return (
    <Router basename={import.meta.env.PROD ? "/smart-fixly" : "/"} >
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Common */}

          <Route path="/" element={<Landing />} />
          <Route path="/logout" element={<Logout />} />

          {/* Auth */}
          <Route path="/login">
            <Route index element={<Navigate to="citizen" replace />} />
            <Route path="citizen" element={<CitizenLogin />} />
            <Route path="staff" element={<StaffLogin />} />
            <Route path="admin" element={<AdminLogin />} />
          </Route>

          <Route path="/register">
            <Route index element={<Navigate to="citizen" replace />} />
            <Route path="citizen" element={<CitizenRegister />} />
            <Route path="staff" element={<StaffRegister />} />
            <Route path="admin" element={<AdminRegister />} />
          </Route>

          {/* Citizen */}
          <Route path="/citizen" element={<CitizenDashboard />}>
            <Route path="submit" element={<SubmitComplaint />} />
            <Route path="track/:complaintId" element={<TrackComplaint />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="feedback/:complaintId" element={<Feedback />} />
          </Route>

          {/* Staff */}
          <Route path="/staff" element={<StaffDashboard />}>
            <Route path="assigned" element={<AssignedComplaints />} />
            <Route path="update/:complaintId" element={<UpdateComplaints />} />
          </Route>

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="complaints" element={<AllComplaints />} />
            <Route path="assign" element={<AssignComplaints />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="monitor" element={<MonitorUpdates />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
