import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const Button = (props) => {
  const {
    text,
    className,
    type,
    onClick,
    isFull,
    isOutlined,
    isFilled,
    href,
    ...rest
  } = props;

  const btnClasses = {
    btn: true,
    "btn--full": isFull,
    "btn--filled": isFilled,
    "btn--outlined": isOutlined,
  };

  if (href) {
    return (
      <a
        href={href}
        title={text}
        className={classNames(btnClasses, className)}
        {...rest}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type={type || "button"}
      className={classNames(btnClasses, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  isFull: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isFilled: PropTypes.bool,
};

export default Button;
