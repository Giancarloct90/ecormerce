import { FooterConatiner, DivSocial, FooterContent, Gdev } from "./styleFooter";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterConatiner>
      <FooterContent>
        <h1>Terminal Shop 2022</h1>
        <AiOutlineCopyright />
        <Gdev>G-Dev</Gdev>
      </FooterContent>
      <DivSocial>
        <FaInstagram />
        <AiOutlineFacebook />
        <CiYoutube />
      </DivSocial>
    </FooterConatiner>
  );
};

export default Footer;
