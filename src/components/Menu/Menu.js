import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "List task", path: "/list-task" },
];

const Menu = () => {
  const location = useLocation();
  console.log("data", location);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto flex items-center text-center h-12 px-4">
        <div className="text-black font-bold mr-8 text-lg">
          <Link to="/">Đức TodoApp</Link>
        </div>
        <div className="flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1 rounded ${
                location.pathname === item.path
                  ? "bg-blue-800 text-white font-semibold"
                  : "text-gray-200 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
