import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "../App.css";

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUsers =
      JSON.parse(localStorage.getItem("clinicRegisteredUsers")) || [];

    if (isLoginMode) {
      const existingUser = registeredUsers.find((u) => u.email === email);
      if (!existingUser) {
        toast.error("Account not found. Please sign up.");
        return;
      }
      if (existingUser.password !== password) {
        toast.error("Incorrect password. Please try again.");
        return;
      }

      localStorage.setItem(
        "clinicUser",
        JSON.stringify({ email: existingUser.email }),
      );
      toast.success("Welcome back!");
      navigate("/appointments");
    } else {
      const userExists = registeredUsers.some((u) => u.email === email);
      if (userExists) {
        toast.error("Email already in use. Please login.");
        return;
      }

      registeredUsers.push({ email, password });
      localStorage.setItem(
        "clinicRegisteredUsers",
        JSON.stringify(registeredUsers),
      );
      localStorage.setItem("clinicUser", JSON.stringify({ email }));
      toast.success("Account created successfully!");
      navigate("/appointments");
    }
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2>{isLoginMode ? "Welcome Back" : "Create an Account"}</h2>
        <p>
          {isLoginMode
            ? "Login to manage your medical appointments."
            : "Sign up to start booking appointments."}
        </p>

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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="primary-btn login-btn"
          >
            {isLoginMode ? "Secure Login" : "Sign Up"}
          </motion.button>
        </form>

        <div className="login-footer">
          <p>
            {isLoginMode
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => setIsLoginMode(!isLoginMode)}
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
      </motion.div>
    </div>
  );
}
