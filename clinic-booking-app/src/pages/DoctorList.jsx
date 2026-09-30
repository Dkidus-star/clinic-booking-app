import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { doctors } from "../data/mockData";
import "../App.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function DoctorList() {
  const [searchParams] = useSearchParams();
  const specialtyFilter = searchParams.get("specialty");

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
        <motion.div
          className="doctor-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {displayedDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              className="doctor-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px -10px rgba(0,0,0,0.15)",
              }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
