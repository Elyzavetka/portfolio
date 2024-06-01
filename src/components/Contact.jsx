import { FaGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <a href="https://github.com/Elyzavetka" target="_blank" rel="">
        <FaGithub className="contact-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/liza-tarasova-289260248"
        target="_blank"
        rel=""
      >
        <ImLinkedin className="contact-icon" />
      </a>
      <a
        href="mailto:tarasova.liza.vic@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="contact-icon" />
      </a>
    </div>
  );
};

export default Contact;
