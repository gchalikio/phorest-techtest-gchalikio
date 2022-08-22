/**

Header component:
Displays a static header on top of the app

**/
import logo from 'assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav
      data-testid="nav"
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/" data-testid="logo">
          <img
            src={logo}
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
