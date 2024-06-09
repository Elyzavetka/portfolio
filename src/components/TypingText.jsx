import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <div className="typing-text">
      <TypeAnimation
        sequence={["Hi I am Liza"]}
        wrapper="p"
        speed={50}
        className="line1"
        cursor={false}
      />
      <TypeAnimation
        sequence={[1000, "Full-Stack Software Engineer"]}
        wrapper="p"
        speed={50}
        className="line2"
        cursor={false}
      />
      <TypeAnimation
        sequence={[2500, "based in London"]}
        wrapper="p"
        speed={50}
        className="line3"
        cursor={false}
      />
    </div>
  );
};

export default TypingText;
