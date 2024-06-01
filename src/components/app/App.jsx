import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import "../../index.css";
// import avatar from "./assets/avatar.jpg";
import TypingText from "../TypingText";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Navbar from "../Navbar";

const App = () => {
  return (
    <div className="app-container">
      <div>
        <Navbar />
      </div>
      <div className="pageWrapper">
        <div className="left-section">
          <div className="">
            <TypingText />
            {/* <AboutMe /> */}
          </div>
        </div>
        <div className="right-section">
          <img src="/assets/avatar.jpg" alt="" />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default App;
