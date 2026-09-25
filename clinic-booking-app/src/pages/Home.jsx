import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const specialties = [
    { name: "Cardiology (የልብ ህክምና)", icon: "❤️" },
    { name: "Pediatrics (የህፃናት ህክምና)", icon: "👶" },
    { name: "General Practice (አጠቃላይ ህክምና)", icon: "🩺" },
    { name: "Dermatology (የቆዳ ህክምና)", icon: "✨" },
    { name: "Neurology (የነርቭ ህክምና)", icon: "🧠" },
    { name: "Orthopedics (የአጥንት ህክምና)", icon: "🦴" },
    { name: "Ophthalmology (የአይን ህክምና)", icon: "👁️" },
    { name: "Dentistry (የጥርስ ህክምና)", icon: "🦷" },
    { name: "Psychiatry (የስነ-ልቦና ህክምና)", icon: "🛋️" },
  ];

  return (
    <div className="home-container fade-in">
      <section className="hero-section">
        <div className="hero-content slide-up">
          <h1>Find and Book the Best Doctors in Addis Ababa</h1>
          <h2 className="amharic-title">
            በአዲስ አበባ ውስጥ ምርጥ ዶክተሮችን ያግኙ እና ቀጠሮ ይያዙ
          </h2>
          <p>
            Skip the waiting room. Book your next medical appointment online in
            seconds.
          </p>
          <p className="amharic-subtext">ያለ ሰልፍ በኦንላይን ቀጠሮዎን በፍጥነት ያስይዙ።</p>
          <Link to="/doctors" className="primary-btn">
            Find a Doctor | ዶክተር ፈልግ
          </Link>
        </div>

        <div className="hero-image-container fade-in-delay">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
            alt="Medical Professional"
            className="hero-image"
          />
        </div>
      </section>

      <section className="specialties-section slide-up-delay">
        <h2>Browse by Specialty | በህክምና ዘርፍ ይፈልጉ</h2>
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
