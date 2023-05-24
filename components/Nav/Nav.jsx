import Link from "next/link";
import Container from "@components/Container";

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
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/" className="nav-link">
            Projects
          </Link>
          <Link href="/" className="nav-link">
            About
          </Link>
          <Link href="/" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
