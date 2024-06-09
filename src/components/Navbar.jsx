const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0" style={{ color: "#ff0000" }}>
      <ul class="flex justify-between p-4 navbar" style={{ color: "#01354f" }}>
        <li class="mr-6 text-xl" style={{ color: "#01354f" }}>
          <a href="#home" className="hover:text-[#0073b1]">
            Home
          </a>
        </li>
        <li class="mr-6 text-xl" style={{ color: "#01354f" }}>
          <a href="#about" className="hover:text-[#0073b1]">
            About me
          </a>
        </li>
        <li class="mr-6 text-xl" style={{ color: "#01354f" }}>
          <a
            href="https://github.com/Elyzavetka"
            className="hover:text-[#0073b1]"
          >
            Projects
          </a>
        </li>
        <li class="mr-6 text-xl" style={{ color: "#01354f" }}>
          <a href="#experience" className="hover:text-[#0073b1]">
            Experience
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
