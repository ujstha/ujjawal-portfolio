"use client";

import { scrollTo } from "@utils/scrollTo";

const NavItem = ({ text }) => {
  return (
    <span className="nav-link" onClick={() => scrollTo(text)}>
      {text}
    </span>
  );
};

export default NavItem;
