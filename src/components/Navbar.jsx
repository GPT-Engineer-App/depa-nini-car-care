import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Depanini</Link>
        <div className="space-x-4">
          <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
          <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/service-reservation" className="text-gray-300 hover:text-white">Service Reservation</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link to="/reviews" className="text-gray-300 hover:text-white">Reviews</Link> {/* Add link to Reviews */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;