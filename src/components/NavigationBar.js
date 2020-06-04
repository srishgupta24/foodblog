import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../style/style.css";

export const NavigationBar = () => {
	const [isOpen, setOpen] = useState(false);

	const handleMouseEnter = () => setOpen(true);

	const handleMouseLeave = () => setOpen(false);

	return (
		<ul className="navbar">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li>
				<Dropdown isOpen={isOpen} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<DropdownToggle caret>
						<Link to="/recipes">
              Recipes
						</Link>
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>Breakfast</DropdownItem>
						<DropdownItem>Lunch Specials</DropdownItem>
						<DropdownItem>Snacks Options</DropdownItem>
						<DropdownItem>Dinner</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</li>
			<li><Link to="/healthyTips">Health Tips</Link></li>
		</ul>
	);
};
