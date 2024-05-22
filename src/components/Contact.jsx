import { FaGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <FaGithub className="contact-icon" />
      <ImLinkedin className="contact-icon" />
      <MdEmail className="contact-icon" />
    </div>
  );
};

export default Contact;
