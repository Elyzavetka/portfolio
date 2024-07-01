import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0" style={{ color: "#ff0000" }}>
      <ul
        className="flex justify-between p-4 navbar"
        style={{ color: "#01354f" }}
      >
        <li className="mr-6 text-xl" style={{ color: "#01354f" }}>
          <Link to="/" className="hover:text-[#0073b1]">
            Home
          </Link>
        </li>
        <li className="mr-6 text-xl" style={{ color: "#01354f" }}>
          <Link to="/about" className="hover:text-[#0073b1]">
            About me
          </Link>
        </li>
        <li className="mr-6 text-xl" style={{ color: "#01354f" }}>
          <a
            href="https://github.com/Elyzavetka"
            className="hover:text-[#0073b1]"
          >
            Projects
          </a>
        </li>
        <li className="mr-6 text-xl" style={{ color: "#01354f" }}>
          <Link to="/experience" className="hover:text-[#0073b1]">
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
