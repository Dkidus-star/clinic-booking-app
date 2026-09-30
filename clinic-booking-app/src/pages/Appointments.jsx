import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast"; // Imported toast for the cancel notification
import "../App.css";

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

export default function Appointments() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("clinicUser"));

  const [myAppointments, setMyAppointments] = useState(() => {
    const saved = localStorage.getItem("clinicAppointments");
    if (saved && user) {
      const allAppointments = JSON.parse(saved);
      return allAppointments.filter((appt) => appt.userEmail === user.email);
    }
    return [];
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  // New function to handle cancellation
  const cancelAppointment = (id) => {
    // 1. Remove from the local state so the UI updates instantly
    const updatedMyAppointments = myAppointments.filter(
      (appt) => appt.id !== id,
    );
    setMyAppointments(updatedMyAppointments);

    // 2. Remove from global localStorage so it persists after refreshing
    const allSaved =
      JSON.parse(localStorage.getItem("clinicAppointments")) || [];
    const updatedAllSaved = allSaved.filter((appt) => appt.id !== id);
    localStorage.setItem("clinicAppointments", JSON.stringify(updatedAllSaved));

    // 3. Trigger a success notification
    toast.success("Appointment canceled successfully.");
  };

  return (
    <div className="appointments-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="page-title">Welcome, {user.email.split("@")[0]}!</h2>
        <p style={{ marginBottom: "2rem", color: "#64748b" }}>
          Here are your upcoming appointments.
        </p>
      </motion.div>

      {myAppointments.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            textAlign: "center",
            padding: "3rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <h3>No appointments yet.</h3>
          <p>Ready to see a doctor?</p>
          <Link
            to="/doctors"
            className="primary-btn"
            style={{ marginTop: "1rem" }}
          >
            Browse Doctors
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="appointments-list"
          variants={listVariants}
          initial="hidden"
          animate="show"
        >
          {myAppointments.map((appt) => (
            <motion.div
              key={appt.id}
              className="appointment-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="appt-info">
                <h3>{appt.doctorName}</h3>
                <p className="doctor-specialty">{appt.specialty}</p>
                <div className="appt-datetime">
                  <span>📅 {appt.date}</span>
                  <span>⏰ {appt.time}</span>
                </div>
              </div>

              {/* Added flex column layout for the status and the new cancel button */}
              <div
                className="appt-status"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0.8rem",
                }}
              >
                <span className={`status-badge ${appt.status.toLowerCase()}`}>
                  {appt.status}
                </span>
                <button
                  onClick={() => cancelAppointment(appt.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#dc2626",
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  ✕ Cancel
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
