import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import { TypeAnimation } from 'react-type-animation';
import avatar from "./avatar.jpg";

const TypingText = () => {
  // const line1 = "Hi, I am Liza,";
  // const line2 = "Full-Stack Software Engineer";
  // const line3 = "based in London.";
  // const typingLine1 = useTypewriter(line1);
  // const typingLine2 = useTypewriter(line2, { delay: 800 });
  // const typingLine3 = useTypewriter(line3);

  return (
    <div>
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

      {/* <p className="line1">{typingLine1}</p> */}
      {/* <p className="line2">{useTypewriter(typingLine2, { delay: 800 })}</p> */}
      {/* <p className="line2">{typingLine2}</p> */}
      {/* <p className="line3">{useTypewriter(typingLine3, { delay: 80 })}</p> */}
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
      <div className="right-section">{/* <img src={avatar} alt=""/> */}</div>
    </div>
  );
};

export default App;
