import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { doctors } from "../data/mockData";
import "../App.css";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");

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

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot first.");
      return;
    }

    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem("clinicUser"));
    if (!user) {
      alert("Please login to book an appointment.");
      navigate("/login");
      return;
    }

    // Create a new appointment object tied to the user's email
    const newAppointment = {
      id: Date.now().toString(),
      userEmail: user.email,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      date: "Oct 20, 2026",
      time: selectedTime,
      status: "Confirmed",
    };

    // Retrieve existing appointments, add the new one, and save it
    const existingAppointments =
      JSON.parse(localStorage.getItem("clinicAppointments")) || [];
    existingAppointments.push(newAppointment);
    localStorage.setItem(
      "clinicAppointments",
      JSON.stringify(existingAppointments),
    );

    navigate("/appointments");
  };

  const availableSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM"];

  return (
    <div className="profile-container fade-in">
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
          {availableSlots.map((time) => (
            <button
              key={time}
              className={`time-slot ${selectedTime === time ? "selected" : ""}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <button className="book-btn confirm-btn" onClick={handleBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
