import Container from "@components/Container";
import SocialButton from "@components/Button/SocialButton";
import { INSTAGRAM, LINKEDIN, FACEBOOK, GITHUB } from "@constants/url";

import "./style.css";

const Footer = () => {
  return (
    <Container isFooter>
      {/* <div className="footer-box"> */}
      <p className="dd">
        <span>Designed & Developed</span> <span>UjjawalShrestha</span>
      </p>
      <p className="copy">
        {new Date().getFullYear()} &copy; All rights reserved
      </p>
      <div>
        <SocialButton href={INSTAGRAM} type="instagram" delay="0.5s" />
        <SocialButton href={LINKEDIN} type="linkedin" delay="1s" />
        <SocialButton href={FACEBOOK} type="facebook" delay="1.5s" />
        <SocialButton href={GITHUB} type="github" delay="2s" />
      </div>
      {/* </div> */}
    </Container>
  );
};

export default Footer;
