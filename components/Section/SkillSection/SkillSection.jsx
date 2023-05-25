"use client";

import { useEffect } from "react";
import Container from "@components/Container";
import Icon from "@components/Icon";
import { isInViewPort } from "@utils/isInViewPort";

import "./style.css";

const SkillSection = () => {
  useEffect(() => {
    isInViewPort(".skills-list");
  }, []);

  return (
    <Container isSection id="skills" className="skill-section">
      <div className="skills-list bg-circular-light">
        <Icon icon="react-js" style={{ "--x": "-20vw", "--y": "2vw" }} />
        <Icon icon="html" style={{ "--x": "-5vw", "--y": "-10vw" }} />
        <Icon icon="next-js" style={{ "--x": "20vw", "--y": "6vw" }} />
        <Icon icon="javascript" style={{ "--x": "0vw", "--y": "12vw" }} />
        <Icon icon="php" style={{ "--x": "-20vw", "--y": "-15vw" }} />
        <Icon icon="css" style={{ "--x": "15vw", "--y": "-12vw" }} />
        <Icon icon="mongodb" style={{ "--x": "32vw", "--y": "-5vw" }} />
      </div>
    </Container>
  );
};

export default SkillSection;
