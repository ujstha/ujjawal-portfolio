import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const Container = (props) => {
  const {
    children,
    className = "",
    isHeader = false,
    isSection = false,
    refer,
    style,
  } = props;
  const classes = classNames(
    {
      "ts-container": true,
    },
    className
  );

  if (isHeader)
    return (
      <header className={classes} ref={refer} style={style}>
        {children}
      </header>
    );
  if (isSection)
    return (
      <section className={classes} ref={refer} style={style}>
        {children}
      </section>
    );

  return (
    <div className={classes} ref={refer} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  isHeader: PropTypes.bool,
  isSection: PropTypes.bool,
  refer: PropTypes.object,
  style: PropTypes.object,
};

export default Container;
