import Image from "next/image";
import Container from "@components/Container";

import "./style.css";

const HeroSection = () => {
  return (
    <Container isSection className="hero-section">
      <div className="hero__details">
        <h1 className="title">
          Hello, I'm Ujjawal, a web Developer with 4 years of experience.
        </h1>
        <p className="desc"></p>
      </div>
      <div className="hero__imgbox">
        <Image
          src="/assets/images/ujjawal.jpg"
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
