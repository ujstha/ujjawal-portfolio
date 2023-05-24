import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const Container = (props) => {
  const {
    children,
    className = "",
    isHeader = false,
    isSection = false,
  } = props;
  const classes = classNames(
    {
      "ts-container": true,
    },
    className
  );

  if (isHeader) return <header className={classes}>{children}</header>;
  if (isSection) return <section className={classes}>{children}</section>;

  return <div className={classes}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  isHeader: PropTypes.bool,
  isSection: PropTypes.bool,
};

export default Container;
