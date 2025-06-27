import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token") || localStorage.getItem("user");
    setIsLoggedIn(token);
    // console.log("Nhận username", token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">Todo App</Link>
        </h1>
        <nav className="flex gap-3 items-center flex-wrap">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {!isLoggedIn && (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
          {isLoggedIn && (
            <button
              className="px-3 py-1 bg-gray-50 text-blue-700 rounded hover:bg-blue-200 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
