import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const HeaderSocial = () => {
  return (
    <div className="header-socials">
      <a
        href="https://linkedin.com/in/yaseen-akbari"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/akbari4yaseen"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="mailto:akbari01.dev@gamil.com" target="_blank" rel="noreferrer">
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default HeaderSocial;
