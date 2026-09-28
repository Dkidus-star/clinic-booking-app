import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const specialties = [
    {
      name: "Primary Care (አጠቃላይ ህክምና)",
      icon: "🩺",
      filter: "General Practice",
    },
    { name: "Neurology (የነርቭ ህክምና)", icon: "🧠", filter: "Neurology" },
    { name: "Cardiology (የልብ ህክምና)", icon: "❤️", filter: "Cardiology" },
    { name: "Pediatrics (የህፃናት ህክምና)", icon: "👶", filter: "Pediatrics" },
    { name: "Dermatology (የቆዳ ህክምና)", icon: "✨", filter: "Dermatology" },
    { name: "Orthopedics (የአጥንት ህክምና)", icon: "🦴", filter: "Orthopedics" },
    { name: "Ophthalmology (የአይን ህክምና)", icon: "👁️", filter: "Ophthalmology" },
    { name: "Dentistry (የጥርስ ህክምና)", icon: "🦷", filter: "Dentistry" },
    { name: "Psychiatry & Support (ስነ-ልቦና)", icon: "🤝", filter: "Psychiatry" },
  ];

  const comprehensiveServices = [
    {
      title: "Inclusive Primary & Specialty Care",
      desc: "Providing compassionate, judgment-free care for the whole you. We meet you where you are.",
      icon: "🏥",
    },
    {
      title: "Labs & Diagnostics",
      desc: "Convenient onsite tests mean you receive rapid results to begin your treatment plan before leaving the clinic.",
      icon: "🔬",
    },
    {
      title: "Onsite Pharmacy",
      desc: "A full-service pharmacy experience working directly with clinicians to ensure rapid medication management.",
      icon: "💊",
    },
    {
      title: "Support Services",
      desc: "Comprehensive health management including social work, case management, and nutrition counseling.",
      icon: "📋",
    },
  ];

  return (
    <div className="home-container fade-in">
      <section className="hero-section">
        <div className="hero-content slide-up">
          <h1>Inclusive Primary & Specialty Care in Addis Ababa</h1>
          <h2 className="amharic-title">በአዲስ አበባ ሁሉን አቀፍ እና ልዩ ህክምና</h2>
          <p>
            More than just a clinic. We are a comprehensive health care center
            dedicated to caring for the whole you without a label.
          </p>
          <p className="amharic-subtext">
            ከክሊኒክም በላይ ነን። ለእርስዎ የተሟላ ጤና የምንተጋ የጤና ማዕከል ነን።
          </p>
          <Link to="/doctors" className="primary-btn">
            Book Your Appointment | ቀጠሮ ይያዙ
          </Link>
        </div>

        <div className="hero-image-container fade-in-delay">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
            alt="Compassionate Medical Professional"
            className="hero-image"
          />
        </div>
      </section>

      <section className="services-section slide-up-delay">
        <h2 className="section-title">Comprehensive Services | የተሟላ አገልግሎቶች</h2>
        <div className="services-grid">
          {comprehensiveServices.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="specialties-section slide-up-delay">
        <h2 className="section-title">
          Browse Providers by Specialty | በህክምና ዘርፍ ይፈልጉ
        </h2>
        <div className="specialties-grid">
          {specialties.map((spec, index) => (
            <Link
              to={`/doctors?specialty=${encodeURIComponent(spec.filter)}`}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="specialty-card">
                <span className="specialty-icon">{spec.icon}</span>
                <h3>{spec.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
