import Image from "next/image";
import Container from "@components/Container";
import Button from "@components/Button";
import SocialButton from "@components/Button/SocialButton";
import { FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN } from "@constants/url";

import "./style.css";

const HeroSection = () => {
  return (
    <Container id="hero" isSection className="hero-section">
      <div className="hero__details">
        <div>
          <h1 className="title">
            Ujjawal Shrestha, a Web-Developer with 4 years of experience.
          </h1>
          <p className="desc slide-down" style={{ "--i": "0.2s" }}>
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>
        <div className="hero__btns">
          <Button
            href="/"
            text="Resume"
            className="btn-resume visible"
            isFilled
          />
          <Button
            href="mailto:ujjawalshrestha7@gmail.com"
            text="Contact me"
            className="btn-contact visible"
            isOutlined
          />
        </div>
        <div className="social-btns">
          <SocialButton href={INSTAGRAM} type="instagram" delay="0.4s" />
          <SocialButton href={LINKEDIN} type="linkedin" delay="0.8s" />
          <SocialButton href={FACEBOOK} type="facebook" delay="1.2s" />
          <SocialButton href={GITHUB} type="github" delay="1.6s" />
        </div>
      </div>
      <div className="hero__imgbox">
        <Image
          src="/assets/images/profile-pic-5.png"
          alt="Picture of Ujjawal Shrestha"
          style={{ objectFit: "cover", objectPosition: "99% center" }}
          fill
          priority
        />
      </div>
    </Container>
  );
};

export default HeroSection;
