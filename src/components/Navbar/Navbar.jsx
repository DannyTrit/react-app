import styleClasses from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () =>
{
	return (
		<nav className={styleClasses.nav}>
			<div className={styleClasses.item}>
				<NavLink to="/profile" activeClassName={styleClasses.navlinkActive}>Profile</NavLink>
			</div>
			<div className={styleClasses.item}>
				<NavLink to="/messages" activeClassName={styleClasses.navlinkActive}>Messages</NavLink>
			</div>
			<div className={styleClasses.item}>
				<NavLink to="/users" activeClassName={styleClasses.navlinkActive}>Users</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;