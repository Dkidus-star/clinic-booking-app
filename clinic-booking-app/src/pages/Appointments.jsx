import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

export default function Appointments() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("clinicUser"));

  // Read from localStorage directly during state initialization and filter for the logged-in user
  const [myAppointments, setMyAppointments] = useState(() => {
    const saved = localStorage.getItem("clinicAppointments");
    if (saved && user) {
      const allAppointments = JSON.parse(saved);
      return allAppointments.filter((appt) => appt.userEmail === user.email);
    }
    return [];
  });

  // Handle unauthorized redirect
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Prevent rendering if user is missing
  if (!user) return null;

  return (
    <div className="appointments-container fade-in">
      <h2 className="page-title">Welcome, {user.email.split("@")[0]}!</h2>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>
        Here are your upcoming appointments.
      </p>

      {myAppointments.length === 0 ? (
        <div
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
        </div>
      ) : (
        <div className="appointments-list">
          {myAppointments.map((appt) => (
            <div key={appt.id} className="appointment-card">
              <div className="appt-info">
                <h3>{appt.doctorName}</h3>
                <p className="doctor-specialty">{appt.specialty}</p>
                <div className="appt-datetime">
                  <span>📅 {appt.date}</span>
                  <span>⏰ {appt.time}</span>
                </div>
              </div>
              <div className="appt-status">
                <span className={`status-badge ${appt.status.toLowerCase()}`}>
                  {appt.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
