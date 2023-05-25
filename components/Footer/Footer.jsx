import Container from "@components/Container";

import "./style.css";
import Button from "@components/Button/Button";
import SocialButton from "@components/Button/SocialButton/SocialButton";
import { INSTAGRAM, LINKEDIN, FACEBOOK } from "@constants/url";

const Footer = () => {
  return (
    <Container isFooter>
      {/* <div className="footer-box"> */}
      <div className="dd">
        <span>Designed & Developed</span> <span>UjjawalShrestha</span>
      </div>
      <div className="copy">
        {new Date().getFullYear()} &copy; All rights reserved
      </div>
      <Button href="/" text="Contact me" className="btn-contact" />
      <div className="social-btns">
        <SocialButton href={INSTAGRAM} type="instagram" />
        <SocialButton href={LINKEDIN} type="linkedin" />
        <SocialButton href={FACEBOOK} type="facebook" />
      </div>
      {/* </div> */}
    </Container>
  );
};

export default Footer;
