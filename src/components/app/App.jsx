import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import "../../index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TypingText from "../TypingText";
// import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Navbar from "../Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";

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
          </div>
          <p className="text-section">
            I am a passionate and proactive Full-Stack Engineer. I have a
            mathematical and organized brain, which makes me a great coder. I
            love not just writing code, but building beautiful reliable
            products. At the same time, I am highly visual, which is crucial for
            the user interface of applications. My favorite stack includes
            <span className="bold-text"> JavaScript</span>,
            <span className="bold-text"> React</span>,
            <span className="bold-text"> TypeScript</span>,
            <span className="bold-text"> Python</span>,
            <span className="bold-text"> Django</span>,
            <span className="bold-text"> MongoDB</span>,
            <span className="bold-text"> PostgreSQL</span>, and
            <span className="bold-text"> CSS</span>.
          </p>
        </div>
        <div className="right-section">
          <img className="img" src="/assets/avatar.jpg" alt="" />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default App;
