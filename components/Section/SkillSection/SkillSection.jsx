import Container from "@components/Container";
import Icon from "@components/Icon";

import "./style.css";

const SkillSection = () => {
  return (
    <Container id="skills" isSection className="skill-section">
      <Icon icon="react-js" />
      <Icon icon="html" />
      <Icon icon="next-js" />
      <Icon icon="javascript" />
      <Icon icon="css" />
      <Icon icon="php" />
      <Icon icon="mongodb" />
    </Container>
  );
};

export default SkillSection;
