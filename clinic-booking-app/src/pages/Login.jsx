import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Fetch existing registered users, or default to an empty array
    const registeredUsers =
      JSON.parse(localStorage.getItem("clinicRegisteredUsers")) || [];

    if (isLoginMode) {
      // LOGIN LOGIC
      const existingUser = registeredUsers.find((u) => u.email === email);

      if (!existingUser) {
        setError("Account not found. Please sign up.");
        return;
      }
      if (existingUser.password !== password) {
        setError("Incorrect password. Please try again.");
        return;
      }

      // Success: Log them in
      localStorage.setItem(
        "clinicUser",
        JSON.stringify({ email: existingUser.email }),
      );
      navigate("/appointments");
    } else {
      // SIGN UP LOGIC
      const userExists = registeredUsers.some((u) => u.email === email);

      if (userExists) {
        setError("Email already in use. Please login.");
        return;
      }

      // Success: Register and auto-log them in
      registeredUsers.push({ email, password });
      localStorage.setItem(
        "clinicRegisteredUsers",
        JSON.stringify(registeredUsers),
      );
      localStorage.setItem("clinicUser", JSON.stringify({ email }));
      navigate("/appointments");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLoginMode ? "Welcome Back" : "Create an Account"}</h2>
        <p>
          {isLoginMode
            ? "Login to manage your medical appointments."
            : "Sign up to start booking appointments."}
        </p>

        {error && (
          <div
            style={{
              color: "#dc2626",
              backgroundColor: "#fef2f2",
              padding: "0.8rem",
              borderRadius: "6px",
              marginBottom: "1rem",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="primary-btn login-btn">
            {isLoginMode ? "Secure Login" : "Sign Up"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isLoginMode
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => {
                setIsLoginMode(!isLoginMode);
                setError("");
              }}
              style={{
                background: "none",
                border: "none",
                color: "#007bff",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              {isLoginMode ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
