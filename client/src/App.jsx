import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Register from "./pages/login and register/Register";
import Login from "./pages/login and register/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
