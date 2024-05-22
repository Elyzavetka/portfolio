import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import avatar from "./avatar.jpg";
import TypingText from "./components/TypingText";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app-container">
      <div className="pageWrapper">
        <div className="left-section">
          <div className="">
            <TypingText />
            <AboutMe />
          </div>
        </div>
        <div className="right-section">
          <img src={avatar} alt="" />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default App;
