import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "../App.css";

export default function Layout() {
  const navigate = useNavigate();

  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("clinicUser"));

  const handleLogout = () => {
    localStorage.removeItem("clinicUser");
    navigate("/login");
  };

  return (
    <div>
      <nav className="nav-bar">
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link to="/">Home</Link>
          <Link to="/doctors">Find a Doctor</Link>
          <Link to="/appointments">My Appointments</Link>
        </div>

        <div style={{ marginLeft: "auto" }}>
          {user ? (
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#dc2626",
                fontWeight: "600",
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" style={{ color: "#007bff", fontWeight: "600" }}>
              Login
            </Link>
          )}
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
