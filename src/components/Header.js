import { Link } from "react-router-dom";

const Header = () => {
  //   const { user, logout } = useContext(UserContext);
  //   const navigate = useNavigate();

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/login");
  //   };

  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">Todo App</Link>
        </h1>
        <nav className="flex gap-3 items-center">
          <Link to="/" className="hover:underline hidden sm:inline">
            Home
          </Link>
          <Link to="/login" className="hover:underline hidden sm:inline">
            Login
          </Link>
          {/* <Link to="/about" className="hover:underline hidden sm:inline">
            About
          </Link> */}
          {/* {!user && (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
          {user && (
            <div className="flex items-center gap-2">
              <span className="bg-white/30 rounded px-2 py-1">
                {user.username}
              </span>
              <button
                className="px-3 py-1 bg-gray-50 text-blue-700 rounded hover:bg-blue-200 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
