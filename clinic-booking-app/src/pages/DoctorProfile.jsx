import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // <-- Import motion
import toast from "react-hot-toast"; // <-- Import toast
import { doctors } from "../data/mockData";
import "../App.css";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");

  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) return <h2>Doctor not found</h2>;

  const handleBooking = () => {
    if (!selectedTime) {
      toast.error("Please select a time slot first."); // <-- Replaced alert
      return;
    }

    const user = JSON.parse(localStorage.getItem("clinicUser"));
    if (!user) {
      toast.error("Please login to book an appointment."); // <-- Replaced alert
      navigate("/login");
      return;
    }

    const newAppointment = {
      id: Date.now().toString(),
      userEmail: user.email,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      date: "Oct 20, 2026",
      time: selectedTime,
      status: "Confirmed",
    };

    const existingAppointments =
      JSON.parse(localStorage.getItem("clinicAppointments")) || [];
    existingAppointments.push(newAppointment);
    localStorage.setItem(
      "clinicAppointments",
      JSON.stringify(existingAppointments),
    );

    toast.success(`Appointment booked with ${doctor.name}!`); // <-- Added success toast
    navigate("/appointments");
  };

  const availableSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM"];

  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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

      <motion.div
        className="booking-section"
        whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      >
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

        <motion.button
          whileTap={{ scale: 0.95 }} // <-- Button shrinks slightly when clicked
          className="book-btn confirm-btn"
          onClick={handleBooking}
        >
          Confirm Booking
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
