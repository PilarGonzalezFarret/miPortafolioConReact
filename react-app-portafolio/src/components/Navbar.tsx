import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* Aplica navLinkCustom a TODOS los enlaces */}
              <Link to="/" className={`nav-link ${styles.navLinkCustom}`}>
                Home
              </Link>
              <Link to="/CheckOutMyWork" className={`nav-link ${styles.navLinkCustom}`}>
              Check out my work
              </Link>
              <Link to="/about" className={`nav-link ${styles.navLinkCustom}`}>
                About this website
              </Link>
              <Link to="/about" className={`nav-link ${styles.navLinkCustom}`}>
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
