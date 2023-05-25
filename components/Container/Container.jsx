import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const Container = (props) => {
  const {
    children,
    id = "",
    className = "",
    isHeader = false,
    isSection = false,
    isFooter = false,
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
      <header id={id} className={classes} ref={refer} style={style}>
        {children}
      </header>
    );
  if (isSection)
    return (
      <section id={id} className={classes} ref={refer} style={style}>
        {children}
      </section>
    );
  if (isFooter)
    return (
      <footer id={id} className={classes} ref={refer} style={style}>
        {children}
      </footer>
    );

  return (
    <div id={id} className={classes} ref={refer} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isHeader: PropTypes.bool,
  isSection: PropTypes.bool,
  isFooter: PropTypes.bool,
  refer: PropTypes.object,
  style: PropTypes.object,
};

export default Container;
