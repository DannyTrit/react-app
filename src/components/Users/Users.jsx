import userDefault from "../../assets/img/UserDefault.png"
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) =>
{
	return (
		<div>
			<Paginator totalCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}/>
			{ props.users.map( user => <User
				id={user.id}
				name={user.name}
				photo={user.photo}
				isFollowed={user.isFollowed}
				follow={props.follow}
				unfollow={props.unfollow}/>)
			}
		</div>
	)
}

const User = ({id, name, photo, isFollowed, follow, unfollow}) =>
{
	return (
		<div key={id}>
			<div>
				<NavLink to={`/profile/${id}`}>
					<img src={photo || userDefault} />
				</NavLink>
			</div>
			<div>
				{name}
			</div>
			<div>
				{isFollowed ?
					<button onClick={() => { unfollow(id) }}>Unfollow</button> :
					<button onClick={() => { follow(id) }}>Follow</button> }
			</div>
		</div>
	)
}

export default Users;