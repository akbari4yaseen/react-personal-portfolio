import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/images/me.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Yaseen Akbari</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <figure className="me">
          <img src={ME} alt="Me" />
        </figure>
        <a href="#footer" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
