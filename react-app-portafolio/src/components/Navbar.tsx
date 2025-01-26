//import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
		return (
			<div className={styles.navbar}>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<a className="nav-link" href="#">
							Home
						</a>
						<button
						className="navbar-toggler"
						type="button"
						/* data-bs-toggle="collapse" */
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
						>
					<span className="navbar-toggler-icon"></span>
				</button>
						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<a className="nav-link" href="#">
									About me
								</a>
								<a className="nav-link" href="#">
									About this website
								</a>
								<a className="nav-link" href="#">
									Contact me
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}

export default Navbar;
