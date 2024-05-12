import React from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';
import useTypewriter from 'react-typewriter-hook';


const TypingText = () => {
  const line1 = "Hi, I am Liza,";
  const line2 = "full-stack software developer.";
  const typingLine1 = useTypewriter(line1);
  const typingLine2 = useTypewriter(line2);

  return (
    <div>
      <h1 className="">{typingLine1}</h1>
      <h2 className="">{useTypewriter(typingLine2, { delay: 20 })}</h2>
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
      <div className="right-section">
        {/* Photo */}
      </div>
    </div>
  );
};

export default App;
