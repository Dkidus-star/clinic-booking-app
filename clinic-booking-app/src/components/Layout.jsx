import { Link, Outlet } from "react-router-dom";
import "../App.css";

export default function Layout() {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/doctors">Find a Doctor</Link>
        <Link to="/appointments">My Appointments</Link>
        <Link to="/login">Login</Link>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
