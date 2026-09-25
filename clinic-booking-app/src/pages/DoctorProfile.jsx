import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/mockData";
import "../App.css";

export default function DoctorProfile() {
  const { id } = useParams();

  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return (
      <div className="profile-container">
        <h2>Doctor not found</h2>
        <Link to="/doctors" className="back-link">
          ← Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <Link to="/doctors" className="back-link">
        ← Back to Doctors
      </Link>

      <div className="profile-header">
        <img src={doctor.image} alt={doctor.name} className="profile-img" />
        <div>
          <h2 style={{ margin: "0 0 0.5rem 0" }}>{doctor.name}</h2>
          <p className="doctor-specialty">{doctor.specialty}</p>
          <p>
            <strong>Location:</strong> {doctor.location}
          </p>
          <p>
            <strong>Consultation Fee:</strong> {doctor.fee}
          </p>
        </div>
      </div>

      <div className="booking-section">
        <h3>Book an Appointment</h3>
        <p>Select an available time slot:</p>

        <div className="time-slots">
          <button className="time-slot">09:00 AM</button>
          <button className="time-slot">10:30 AM</button>
          <button className="time-slot">01:00 PM</button>
          <button className="time-slot">03:30 PM</button>
        </div>

        <button className="book-btn confirm-btn">Confirm Booking</button>
      </div>
    </div>
  );
}
