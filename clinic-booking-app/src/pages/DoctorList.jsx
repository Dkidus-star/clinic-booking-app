import { Link, useSearchParams } from "react-router-dom";
import { doctors } from "../data/mockData";
import "../App.css";

export default function DoctorList() {
  // Grab the search parameters from the URL
  const [searchParams] = useSearchParams();
  const specialtyFilter = searchParams.get("specialty");

  // Filter the doctors based on the URL parameter.
  // If there is no parameter, show all doctors.
  const displayedDoctors = specialtyFilter
    ? doctors.filter((doc) => doc.specialty === specialtyFilter)
    : doctors;

  return (
    <div className="fade-in">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h2 className="page-title" style={{ marginBottom: 0 }}>
          {specialtyFilter ? `${specialtyFilter}s` : "Available Providers"}
        </h2>

        {/* Show a "Clear Filter" link if a filter is active */}
        {specialtyFilter && (
          <Link
            to="/doctors"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            ✕ Clear Filter
          </Link>
        )}
      </div>

      {displayedDoctors.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <h3>No providers found for this specialty.</h3>
          <Link
            to="/doctors"
            className="primary-btn"
            style={{ marginTop: "1rem" }}
          >
            View All Providers
          </Link>
        </div>
      ) : (
        <div className="doctor-grid">
          {displayedDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-img"
              />
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
      )}
    </div>
  );
}
