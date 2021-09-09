import {connect} from "react-redux";
import React, {useEffect} from "react";
import {
	follow, getUsers,
	setCurrentPage,
	unfollow
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOCs/redirect/withAuthRedirect";

const UsersContainer = (props) =>
{
	useEffect(() => {
		props.getUsers(props.currentPage, props.pageSize);
	}, [props.currentPage])

	const selectPage = (page) =>
	{
		props.setCurrentPage(page);
	}
	return (
		<> {this.props.isLoading && <Preloader/>}
			<Users {...this.props} selectPage={this.selectPage}/>
		</>
	)
}

const mapStateToProps = (state) => ({
	users: state.usersPager.users,
	totalUsersCount: state.usersPager.totalUsersCount,
	pageSize: state.usersPager.pageSize,
	currentPage: state.usersPager.currentPage,
	isLoading: state.usersPager.isLoading
})

export default compose(
	connect(mapStateToProps, {
		follow, unfollow, setCurrentPage, getUsers
	}),
	withAuthRedirect
)(UsersContainer)