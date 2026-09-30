import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "../App.css";

export default function Layout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("clinicUser"));

  const handleLogout = () => {
    localStorage.removeItem("clinicUser");
    navigate("/login");
  };

  // Staggering parent container for the links
  const navContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Spring animation for each link sliding in from the left
  const linkItem = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <div className="app-wrapper">
      <motion.nav
        className="nav-bar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="nav-brand"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}></span>
          <strong>Addis Clinic</strong>
        </motion.div>

        <motion.div
          className="nav-links"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={linkItem}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div variants={linkItem}>
            <NavLink
              to="/doctors"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Find a Doctor
            </NavLink>
          </motion.div>
          {user && (
            <motion.div variants={linkItem}>
              <NavLink
                to="/appointments"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                My Appointments
              </NavLink>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="nav-auth"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          {user ? (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
          )}
        </motion.div>
      </motion.nav>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            padding: "16px",
            color: "#1e293b",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          },
        }}
      />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
