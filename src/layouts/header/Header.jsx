import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./_header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img src={logo} alt="logo kasa" />
      </Link>

      <nav>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) => (isActive ? "navbar-link" : "none")}
        >
          Acceuil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "navbar-link" : "none")}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
