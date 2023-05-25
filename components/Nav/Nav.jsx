import Link from "next/link";
import Container from "@components/Container";
import NavItem from "./NavItem";

import "./style.css";

const Nav = () => {
  return (
    <Container isHeader>
      <div className="header-overlay"></div>
      <nav>
        <Link href="/" className="nav-brand">
          US
        </Link>
        {/* Mobile Navigation */}

        {/* Desktop Navigation */}
        <div>
          <NavItem text="home" />
          <NavItem text="projects" />
          <NavItem text="skills" />
          {/* <NavItem text="contact" /> */}
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
