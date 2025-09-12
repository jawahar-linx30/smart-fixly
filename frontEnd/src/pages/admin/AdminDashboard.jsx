import { Outlet, Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {/* Example navigation */}
      <nav>
        <Link to="complaints">Complaints</Link> |{" "}
        <Link to="assign">Assign</Link> |{" "}
        <Link to="analytics">Analytics</Link> |{" "}
        <Link to="monitor">Monitor</Link>
      </nav>

      {/* This is where child routes will be rendered */}
      <Outlet />

      <button
        onClick={() => navigate("/admin")}
        style={{ marginTop: "20px" }}
      >
        ⬅️ Return to Dashboard
      </button>
    </div>
  );
}