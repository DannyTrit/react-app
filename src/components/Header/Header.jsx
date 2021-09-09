import styleClasses from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) =>
{
	return (
	   <header className={styleClasses.header}>
				<img src=""/>

			<div className={styleClasses.loginBlock}>
				{props.isAuth ?
					<button onClick={props.logOut}> {props.login} - Log out</button> :
					<NavLink to="/login">Login</NavLink>
				}
			</div>
		</header>);
}

export default Header;