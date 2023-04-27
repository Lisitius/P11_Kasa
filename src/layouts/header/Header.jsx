import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img src={logo} alt="logo kasa" />
      </Link>

      <nav>
        <NavLink exact to="/" activeClassName="active" className="navbar-link">
          Acceuil
        </NavLink>
        <NavLink to="/about" activeClassName="active" className="navbar-link">
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
