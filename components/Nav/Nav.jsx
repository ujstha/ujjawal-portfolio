"use client";

import Link from "next/link";
import Container from "@components/Container";
import NavItem from "./NavItem";

import "./style.css";
import useThemeSwitcher from "@utils/hooks/useThemeSwitcher";

const Nav = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <Container isHeader>
      <div className="header-overlay"></div>
      <nav>
        <Link
          href="/"
          className="nav-brand slide-right"
          style={{ "--i": "0.5s" }}
        >
          US
        </Link>
        {/* Mobile Navigation */}

        {/* Desktop Navigation */}
        <div>
          <NavItem text="home" animationDelay="0.2s" />
          <NavItem text="projects" animationDelay="0.4s" />
          <NavItem text="skills" animationDelay="0.6s" />
          {/* <NavItem text="contact" /> */}
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
