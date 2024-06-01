const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0" style={{ color: "#ff0000" }}>
      <ul class="flex justify-between p-4" style={{ color: "#01354f" }}>
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
          <a href="#projects" className="hover:text-[#0073b1]">
            Projects
          </a>
        </li>
        <li class="mr-6 text-xl" style={{ color: "#01354f" }}>
          <a href="#experience" className="hover:text-[#0073b1]">
            Experience
          </a>
        </li>
        <li class="mr-6 text-xl" style={{ color: "#01354f" }}>
          <a href="#contact" className="hover:text-[#0073b1]">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    // <nav className="navbar">
    //   <div className="navbar-brand"></div>
    //   <ul className="navbar-links">
    //     <li>
    //       <a href="#home">Home</a>
    //     </li>
    //     <li>
    //       <a href="#about-me">About me</a>
    //     </li>
    //     <li>
    //       <a href="#projects">Projects</a>
    //     </li>
    //     <li>
    //       <a href="#experience">Experience</a>
    //     </li>
    //     <li>
    //       <a href="#contact">Contact</a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
