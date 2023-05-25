"use client";

import { scrollTo } from "@utils/scrollTo";

const NavItem = ({ text, animationDelay }) => {
  return (
    <span
      className="nav-link slide-down"
      onClick={() => scrollTo(text)}
      style={{ "--i": animationDelay }}
    >
      {text}
    </span>
  );
};

export default NavItem;
