import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Appointments() {
  const navigate = useNavigate();
  // Check if our user exists in local storage
  const user = JSON.parse(localStorage.getItem("clinicUser"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  const myAppointments = [
    {
      id: "101",
      doctorName: "Dr. Dawit Tadesse",
      specialty: "Cardiology",
      date: "Oct 15, 2026",
      time: "10:30 AM",
      status: "Confirmed",
    },
  ];

  return (
    <div className="appointments-container fade-in">
      {/* Personalized Greeting */}
      <h2 className="page-title">Welcome, {user.email.split("@")[0]}!</h2>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>
        Here are your upcoming appointments.
      </p>

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
    </div>
  );
}
