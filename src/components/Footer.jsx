import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90  text-white text-xs text-center p-4 w-screen ">
      <div className="flex justify-center gap-8">
        <a target="_blank" href="https://github.com/naufalaufa">
          <FaGithub size={20} />
        </a>
        <a target="_blank" href="https://www.instagram.com/_opal.jpg/?hl=id">
          <FaInstagram size={20} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/naufal-aufa-a7a415257/"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
