import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const specialties = [
    { name: "Cardiology", icon: "❤️" },
    { name: "Pediatrics", icon: "👶" },
    { name: "General Practice", icon: "🩺" },
    { name: "Dermatology", icon: "✨" },
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Find and Book the Best Doctors Near You</h1>
        <p>
          Skip the waiting room. Book your next medical appointment online in
          seconds.
        </p>
        <Link to="/doctors" className="primary-btn">
          Find a Doctor
        </Link>
      </section>

      <section className="specialties-section">
        <h2>Browse by Specialty</h2>
        <div className="specialties-grid">
          {specialties.map((spec, index) => (
            <div key={index} className="specialty-card">
              <span className="specialty-icon">{spec.icon}</span>
              <h3>{spec.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
