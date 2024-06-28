import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";
import ServiceReservation from "./pages/ServiceReservation.jsx";
import OrderTracking from "./pages/OrderTracking.jsx"; // Import OrderTracking

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/service-reservation" element={<ServiceReservation />} />
        <Route exact path="/order-tracking/:orderId" element={<OrderTracking />} /> {/* Add route for OrderTracking */}
      </Routes>
    </Router>
  );
}

export default App;