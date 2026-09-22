import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav
        style={{
          padding: "1rem",
          background: "#f0f0f0",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/doctors">Find a Doctor</Link>
        <Link to="/appointments">My Appointments</Link>
        <Link to="/login">Login</Link>
      </nav>
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
