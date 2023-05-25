import "./style.css";

const AnimatedText = (props) => {
  const { text } = props;

  return (
    <h1 className="title">
      {text?.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>{word}&nbsp;</span>
      ))}
    </h1>
  );
};

export default AnimatedText;
