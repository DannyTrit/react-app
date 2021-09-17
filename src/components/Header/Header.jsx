import headerStyle from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Header = (props) =>
{
	let [logOutIsShown, setLogOutIsShown] = useState(false);
	return (
	   <header className={headerStyle.header}>

			<div className={headerStyle.loginBlock} onMouseLeave={() => setLogOutIsShown(false)}>
				{props.isAuth && <div>
					<span className={headerStyle.login} onClick={() => setLogOutIsShown(true)}>{props.login}</span>
				</div>}
				{logOutIsShown && <div>
					<span className={headerStyle.logOutBtn} onClick={props.logOut}>Log out</span>
				</div>}
			</div>

		</header>);
}

export default Header;