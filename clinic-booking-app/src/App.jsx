import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DoctorList from "./pages/DoctorList";
import DoctorProfile from "./pages/DoctorProfile";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="doctors" element={<DoctorList />} />
          <Route path="doctors/:id" element={<DoctorProfile />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
