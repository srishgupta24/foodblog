import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../style/style.css";

export const NavigationBar = () => {

	return (
		<ul className="navbar">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/recipes">Recipes</Link></li>
			<li><Link to="/healthyTips">Health Tips</Link></li>
		</ul>
	);
};
