"use client";

import { useEffect } from "react";
import Container from "@components/Container";
import Skill from "./Skill";
import { isInViewPort } from "@utils/isInViewPort";

import "./style.css";

const SkillSection = () => {
  useEffect(() => {
    isInViewPort(".skills-list");
  }, []);

  return (
    <Container isSection id="skills" className="skill-section">
      <h2 className="section__title skill-title">Skills</h2>
      <div className="skills-list">
        <Skill text="ReactJS" x="-10vw" y="2vw" />
        <Skill text="TailwindCSS" x="-28vw" y="-6vw" />
        <Skill text="NodeJS" x="-28vw" y="8vw" />
        <Skill text="MySQL" x="-15vw" y="17vw" />
        <Skill text="HTML" x="-5vw" y="-11vw" />
        <Skill text="NextJS" x="20vw" y="9vw" />
        <Skill text="JavaScript" x="0vw" y="11vw" />
        <Skill text="PHP" x="-20vw" y="-15vw" />
        <Skill text="CSS" x="15vw" y="-12vw" />
        <Skill text="MongoDB" x="30vw" y="-5vw" />
        <Skill text="Laravel" x="12vw" y="1vw" />
        <Skill text="Express" x="10vw" y="20vw" />
      </div>
    </Container>
  );
};

export default SkillSection;
