import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {	follow, getUsers, unfollow } from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOCs/redirect/withAuthRedirect";
import Paginator from "../common/Paginator/Paginator";

const UsersContainer = ({currentPage, totalUsersCount, pageSize, getUsers, ...props}) =>
{
	let [page, setActualPage] = useState(currentPage);
	useEffect(() =>
	{
		getUsers(page, pageSize);
	}, [page]);

	return (<>
		<Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={6} onPageChanged={setActualPage} />
		{props.isFetching ? <Preloader/> : <Users {...props}/>}
	</>)

}

const mapStateToProps = (state) => ({
	users: state.usersPager.users,
	totalUsersCount: state.usersPager.totalUsersCount,
	pageSize: state.usersPager.pageSize,
	currentPage: state.usersPager.currentPage,
	isFetching: state.usersPager.isFetching,
	usersFollowingInProgress: state.usersPager.usersFollowingInProgress
})

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		getUsers
	}),
	withAuthRedirect
)(UsersContainer)