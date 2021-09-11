import userDefault from "../../assets/img/UserDefault.png"
import {NavLink} from "react-router-dom";
import style from "./Users.module.css";
import {memo} from "react";

const Users = (props) =>
{

	return (
		<div className={style.usersBlock}>
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

/*
id: required(integer)
name: required(string)
status: (string)
photos: {
	small: (string)
	large: (string)
}
followed: required(boolean)
 */

const User = memo(({ id, name, status, photo, followed, follow, unfollow, usersFollowingInProgress}) =>
{
	debugger;
	return (
		<div className={style.user}>
			<div>
				<NavLink to={`/profile/${id}`}>
					<img className={style.photo} src={photo || userDefault} />
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