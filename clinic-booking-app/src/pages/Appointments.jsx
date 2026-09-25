import "../App.css";

export default function Appointments() {
  // Mock data for user's appointments
  const myAppointments = [
    {
      id: "101",
      doctorName: "Dr. Sarah Jenkins",
      specialty: "Cardiology",
      date: "Oct 15, 2026",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: "102",
      doctorName: "Dr. Emily Rodriguez",
      specialty: "General Practice",
      date: "Sep 10, 2026",
      time: "02:00 PM",
      status: "Completed",
    },
  ];

  return (
    <div className="appointments-container">
      <h2 className="page-title">My Appointments</h2>

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
