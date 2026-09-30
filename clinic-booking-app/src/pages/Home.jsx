import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero-image.jpg"; // <-- Added the import for your local image
import "../App.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1>Inclusive Primary & Specialty Care </h1>
          <h2 className="amharic-title">በአዲስ አበባ ሁሉን አቀፍ እና ልዩ ህክምና</h2>
          <p>
            More than just a clinic. We are a comprehensive health care center
            dedicated to caring for the whole you without a label.
          </p>
          <p className="amharic-subtext">ከክሊኒክም በላይ ነን። ለእርስዎ የተሟላ ጤና የምንተጋ።</p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/doctors"
              className="primary-btn"
              style={{ display: "inline-block" }}
            >
              Book Your Appointment | ቀጠሮ ይያዙ
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* <-- Replaced the web URL with the local heroImg variable */}
          <img
            src={heroImg}
            alt="Compassionate Medical Professional"
            className="hero-image"
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Comprehensive Services | የተሟላ አገልግሎቶች
        </motion.h2>
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {comprehensiveServices.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
            >
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Specialties Directory */}
      <section className="specialties-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Browse Providers by Specialty | በህክምና ዘርፍ ይፈልጉ
        </motion.h2>
        <motion.div
          className="specialties-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {specialties.map((spec, index) => (
            <Link
              to={`/doctors?specialty=${encodeURIComponent(spec.filter)}`}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <motion.div
                className="specialty-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  borderColor: "#007bff",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.05)",
                }}
              >
                <span className="specialty-icon">{spec.icon}</span>
                <h3 style={{ textAlign: "center" }}>{spec.name}</h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
