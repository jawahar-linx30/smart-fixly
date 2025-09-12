import { Outlet, Link, useNavigate } from "react-router-dom";

export default function CitizenDashboard() {
  
  const navigate = useNavigate();

  return (
    <div>
      <h1>Citizen Dashboard</h1>

      {/* Navigation */}
      <nav>
        <Link to="submit">Submit Complaint</Link> |{" "}
        <Link to="track/123">Track Complaint</Link> |{" "}
        <Link to="notifications">Notifications</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="feedback/123">Feedback</Link>
      </nav>

      {/* Nested routes go here */}
      <Outlet />

      <button
        onClick={() => navigate("/citizen")}
        style={{ marginTop: "20px" }}
      >
        ⬅️ Return to Dashboard
      </button>
    </div>
  );
}
