import userDefault from "../../assets/img/UserDefault.png"
import {NavLink} from "react-router-dom";
import usersStyle from "./Users.module.css";
import {memo} from "react";
import appStyle from "../../App.module.css";

const Users = (props) =>
{

	return (
		<div className={appStyle.contentBlock}>
			{props.users.map( user =>
				 <User key={user.id}
						 id={user.id}
						 name={user.name}
						 status={user.status}
						 photo={user.photos.small}
						 followed={user.followed}
						 follow={props.follow}
						 unfollow={props.unfollow}
						 usersFollowingInProgress={props.usersFollowingInProgress}/>)
			}
		</div>
	)
}
const User = memo(({ id, name, status, photo, followed, follow, unfollow, usersFollowingInProgress}) =>
{
	return (
		<div className={usersStyle.user}>
			<div>
				<NavLink to={`/profile/${id}`}>
					<img className={usersStyle.photo} src={photo || userDefault} />
				</NavLink>
				<div>
						<button className={appStyle.appButton}
								  disabled={usersFollowingInProgress.includes(id)}
								  onClick={() => { followed ? unfollow(id) : follow(id) }}>
							{followed ? "Unfollow" : "Follow"}
						</button>
				</div>
			</div>
			<div className={usersStyle.infoBlock}>
				<span className={usersStyle.userName}>{name}</span>
				<span className={usersStyle.userStatus}>{status}</span>
			</div>
		</div>
	)
})

export default Users;