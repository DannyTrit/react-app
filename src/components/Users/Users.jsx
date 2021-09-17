import userDefault from "../../assets/img/UserDefault.png"
import {NavLink} from "react-router-dom";
import usersStyle from "./Users.module.css";
import {memo} from "react";
import appStyle from "../../App.module.css";

const Users = (props) =>
{

	return (
		<div className={usersStyle.usersPage}>
			<div className={`${usersStyle.usersBlock} ${appStyle.contentBlock}`}>
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
			</div>
			<div>
				{name}
			</div>
			<div>
				{status}
			</div>
			<div>
				{followed ?
					<button disabled={usersFollowingInProgress.includes(id)} onClick={() => { unfollow(id) }}>Unfollow</button> :
					<button disabled={usersFollowingInProgress.includes(id)} onClick={() => { follow(id) }}>Follow</button> }
			</div>
		</div>
	)
})

export default Users;