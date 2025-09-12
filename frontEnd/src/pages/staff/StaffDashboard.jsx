import { Outlet, Link, useNavigate } from "react-router-dom";

export default function StaffDashboard() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Staff Dashboard</h1>

      {/* Navigation */}
      <nav>
        <Link to="assigned">Assigned Complaints</Link> |{" "}
        <Link to="update/456">Update Complaint</Link>
      </nav>

      {/* Nested routes go here */}
      <Outlet />

      <button
        onClick={() => navigate("/staff")}
        style={{ marginTop: "20px" }}
      >
        ⬅️ Return to Dashboard
      </button>
    </div>
  );
}
