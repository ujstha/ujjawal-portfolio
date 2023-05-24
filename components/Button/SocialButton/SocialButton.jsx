import PropTypes from "prop-types";
import Icon from "@components/Icon";

import "./style.css";

const SocialButton = (props) => {
  const { href, type } = props;
  return (
    <a
      href={href}
      target="_blank"
      title={`Contact me on ${type}`}
      rel="noreferral noopener"
      className={`btn-social btn-social-${type}`}
    >
      <Icon
        icon={type}
        svgFill="currentcolor"
        className={`btn-social__icon social-${type}__icon`}
      />
    </a>
  );
};

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SocialButton;
