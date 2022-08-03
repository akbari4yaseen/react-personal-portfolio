import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <footer id="footer">
      <a
        href="https://www.linkedin.com/in/yaseen-akbari/"
        className="footer-logo"
      >
        Yaseen Akbari
      </a>
      <ul className="footer-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          {" "}
          <FiTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Yaseen Akbari. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
