import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";

export default function Layout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("clinicUser"));

  const handleLogout = () => {
    localStorage.removeItem("clinicUser");
    navigate("/login");
  };

  return (
    <div className="app-wrapper">
      <nav className="nav-bar">
        <div className="nav-brand">
          <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>🏥</span>
          <strong>Addis Clinic</strong>
        </div>

        <div className="nav-links">
          {/* NavLink automatically applies an 'active' class when the route matches */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Find a Doctor
          </NavLink>
          {user && (
            <NavLink
              to="/appointments"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              My Appointments
            </NavLink>
          )}
        </div>

        <div className="nav-auth">
          {user ? (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
          )}
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
