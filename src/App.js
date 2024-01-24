// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Create this file for your styles
import Container from "./components/Container";
import Form from "./components/Form";
const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);
    const [formOpen,setFormOpen]=useState(false)
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="container">
			<div className="v-flex">
				<Navbar isOpen={menuOpen} toggleMenu={toggleMenu} />
				<Container toggleMenu={toggleMenu} setFormOpen={setFormOpen} />
                 { formOpen && <Form setFormOpen={setFormOpen} />
				 }
			</div>
		</div>
	);
};

export default App;
