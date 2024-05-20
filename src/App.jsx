import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import { TypeAnimation } from 'react-type-animation';
import avatar from "./avatar.jpg";

const TypingText = () => {

  return (
    <div className="typing-text">
      <TypeAnimation
        sequence={[
          "Hi I am Liza",
        ]}
        wrapper="p"
        speed={50}
        className="line1"
        cursor={false}
      />
      <TypeAnimation
        sequence={[
          1000,
          "Full-Stack Software Engineer",
        ]}
        wrapper="p"
        speed={50}
        className="line2"
        cursor={false}
      />
      <TypeAnimation
        sequence={[
          2500,
          "based in London",
        ]}
        wrapper="p"
        speed={50}
        className="line3"
        cursor={false}
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="pageWrapper">
      <div className="left-section">
        <div className="">
          <TypingText />
        </div>
      </div>
      <div className="right-section"><img src={avatar} alt=""/></div>
    </div>
  );
};

export default App;
