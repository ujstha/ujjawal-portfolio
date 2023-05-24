"use client";

import Link from "next/link";
import { scrollTo } from "@utils/scrollTo";

const NavItem = ({ text }) => {
  return (
    <Link href="/" className="nav-link" onClick={() => scrollTo(text)}>
      {text}
    </Link>
  );
};

export default NavItem;
