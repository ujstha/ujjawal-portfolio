import Link from "next/link";
import Container from "@components/Container";
import NavItem from "./NavItem";
// import Icon from "@components/Icon";
// import useThemeSwitcher from "@utils/hooks/useThemeSwitcher";

import "./style.css";

const Nav = () => {
  // const [mode, setMode] = useThemeSwitcher();

  // const toggleTheme = () => {
  //   setMode(mode === "dark" ? "light" : "dark");
  // };

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
        {/* <button
          className="theme-switcher"
          onClick={toggleTheme}
          title={`Switch to ${mode === "dark" ? "Light" : "Dark"} mode`}
        >
          <Icon icon={mode === "dark" ? "sun" : "moon"} height="1.5rem" />
        </button> */}
      </nav>
    </Container>
  );
};

export default Nav;
