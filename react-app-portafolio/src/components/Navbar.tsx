import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar} >
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid" >
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
							<Link to="/about" className="nav-link" color="green">
                About me
              </Link>
              <Link to="/about" className="nav-link">
                About this website
              </Link>
              <Link to="/about" className="nav-link">
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
