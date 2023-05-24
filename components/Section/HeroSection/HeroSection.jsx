import Image from "next/image";
import Container from "@components/Container";
import Button from "@components/Button";
import SocialButton from "@components/Button/SocialButton";
import { FACEBOOK, INSTAGRAM, LINKEDIN } from "@constants/url";

import "./style.css";

const HeroSection = () => {
  return (
    <Container isSection className="hero-section">
      <div className="hero__details">
        <div>
          <h1 className="title">
            Hello, I'm Ujjawal, a web Developer with 4 years of experience.
          </h1>
          <p className="desc">
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>
        <div className="hero__btns">
          <Button href="/" text="Contact me" className="btn-contact" />
          <div className="social-btns">
            <SocialButton href={INSTAGRAM} type="instagram" />
            <SocialButton href={LINKEDIN} type="linkedin" />
            <SocialButton href={FACEBOOK} type="facebook" />
          </div>
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
