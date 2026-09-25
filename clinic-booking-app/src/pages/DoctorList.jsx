import { Link } from "react-router-dom";
import { doctors } from "../data/mockData";
import "../App.css";

export default function DoctorList() {
  return (
    <div>
      <h2 className="page-title">Available Doctors</h2>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-img" />
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <p className="doctor-location">{doctor.location}</p>
            <p>Consultation: {doctor.fee}</p>

            <Link to={`/doctors/${doctor.id}`} className="book-btn">
              View Profile & Book
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
