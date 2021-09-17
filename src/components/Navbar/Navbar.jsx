import navbarStyle from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = (props) =>
{
	return (<nav className={navbarStyle.navbar}>
		<div className={navbarStyle.item}>
			<NavLink to={`/profile/${props.userID}`}>Profile</NavLink>
		</div>
		<div className={navbarStyle.item}>
			<NavLink to="/messages">Messages</NavLink>
		</div>
		<div className={navbarStyle.item}>
			<NavLink to="/users">Users</NavLink>
		</div>
		<div className={navbarStyle.item}>
			<NavLink to="/music">Music</NavLink>
		</div>
		<div className={navbarStyle.item}>
			<NavLink to="/settings">Settings</NavLink>
		</div>
	</nav>);
}

export default Navbar;