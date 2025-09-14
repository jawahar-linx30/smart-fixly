import "../../../styles/pages/auth/Login.css";
import Button from "../../../components/Button";

export default function StaffLogin() {
  return (
      <div className="login-page">
    <div className="login-container">
      <div className="logo-container">
        {/* Shield with check mark logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h2>Municipal Staff Login</h2>
      <p>Access the official complaint management system.</p>

      <form action="#" method="POST">
        <div className="input-group">
          <label htmlFor="user-id">User ID / Email</label>
          <input
            type="text"
            id="user-id"
            name="user-id"
            placeholder="Enter your official user ID or email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <Button label="Login" to="/otp" className="btn primary-btn " />
      </form>

      <div className="extra-links">
        <a href="#" className="link-secondary">
          Forgot Password?
        </a>
        <a href="/" className="link-secondary">
          Back to Homepage
        </a>
      </div>
    </div>
    </div>
  );
}