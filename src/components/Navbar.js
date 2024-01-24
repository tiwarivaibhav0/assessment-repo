import React from "react";
import { assesmentNavIcon, closeLabel, dashboardIcon, libraryIcon, roundStatusIcon } from "../assets/svg";

const Navbar = ({ isOpen, toggleMenu }) => {
	return (
		<nav className={`navbar v-flex-afs g-10 ${isOpen ? "open" : ""}`}>
			<div className="v-flex v-flex-column v-flex-ac g-16">
				<div className="navbar-items-1 v-flex v-flex-column v-flex-afs g-2">
					<div className="dashboard-icon v-flex v-flex-ac g-6">
						{dashboardIcon}
						<p>Dashboard</p>
					</div>
					<div className="assessment-icon v-flex v-flex-ac g-6">
						{assesmentNavIcon}
						<p>Assessment</p>
					</div>
					<div className="library-icon v-flex v-flex-ac v-flex-column g-6">
						{libraryIcon}
						<p>My Library</p>
					</div>
				</div>
				<div className="navbar-items-2 v-flex v-flex-column v-flex-ac g-16">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="90"
						height="2"
						viewBox="0 0 90 2"
						fill="none"
					>
						<path d="M0 1H90" stroke="#BACBD5" strokeDasharray="2 2" />
					</svg>
					<div className="round-status v-flex v-flex-column v-flex-ac g-6">
						<div className="admin-tag v-flex v-flex-ac g-6">
							<p>Admin</p>
						</div>
						<div className="round-status-icon v-flex v-flex-column v-flex-ac g-6">
							{roundStatusIcon}
							<p>Round Status</p>
						</div>
					</div>
				</div>
			</div>
			<button onClick={toggleMenu} id="navbarToggler">
				{closeLabel}
			</button>
		</nav>
	);
};

export default Navbar;
