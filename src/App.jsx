import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";
import ServiceReservation from "./pages/ServiceReservation.jsx";
import OrderTracking from "./pages/OrderTracking.jsx";
import Payment from "./pages/Payment.jsx";
import Invoice from "./pages/Invoice.jsx";
import Reviews from "./pages/Reviews.jsx";
import Chat from "./pages/Chat.jsx"; // Import Chat
import FAQ from "./pages/FAQ.jsx"; // Import FAQ
import SupportTickets from "./pages/SupportTickets.jsx"; // Import SupportTickets

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
        <Route exact path="/order-tracking/:orderId" element={<OrderTracking />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/invoice/:invoiceId" element={<Invoice />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/chat" element={<Chat />} /> {/* Add route for Chat */}
        <Route exact path="/faq" element={<FAQ />} /> {/* Add route for FAQ */}
        <Route exact path="/support-tickets" element={<SupportTickets />} /> {/* Add route for SupportTickets */}
      </Routes>
    </Router>
  );
}

export default App;