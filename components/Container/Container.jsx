import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const Container = ({
  children,
  isHeader = false,
  isFooter = false,
  isSection = false,
  className = "",
  ...rest
}) => {
  const classes = classNames(
    {
      "ts-container": true,
    },
    className
  );

  if (isHeader)
    return (
      <header className={classes} {...rest}>
        {children}
      </header>
    );
  if (isSection)
    return (
      <section className={classes} {...rest}>
        {children}
      </section>
    );
  if (isFooter)
    return (
      <footer className={classes} {...rest}>
        {children}
      </footer>
    );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  isHeader: PropTypes.bool,
  isSection: PropTypes.bool,
  isFooter: PropTypes.bool,
};

export default Container;
