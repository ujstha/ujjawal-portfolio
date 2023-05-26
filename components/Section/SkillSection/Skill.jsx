const Skill = ({ text, x, y }) => {
  return (
    <span className="skill" style={{ "--x": x, "--y": y }}>
      {text}
    </span>
  );
};

export default Skill;
