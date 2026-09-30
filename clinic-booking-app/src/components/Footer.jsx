import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Addis Clinic Care</h3>
          <p>
            Providing inclusive, comprehensive, and compassionate medical care
            to the Addis Ababa community.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/doctors">Find a Provider</a>
            </li>
            <li>
              <a href="/login">Patient Portal</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Bole Road, Addis Ababa, Ethiopia</p>
          <p>📞 +251 911 234 567</p>
          <p>✉️ support@addisclinic.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Addis Clinic Care. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
