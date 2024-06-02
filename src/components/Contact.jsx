import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <a href="https://github.com/Elyzavetka" target="_blank" rel="">
        <IoLogoGithub className="contact-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/liza-tarasova-289260248"
        target="_blank"
        rel=""
      >
        <IoLogoLinkedin className="contact-icon" />
      </a>
      <a href="mailto:tarasova.liza.vic@gmail.com" className="contact-icon">
        <MdEmail className="contact-icon" />
      </a>
      <div className="contact-email">tarasova.liza.vic@gmail.com</div>
    </div>
  );
};

export default Contact;
