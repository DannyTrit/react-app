import {API} from "../../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT";
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING";

const initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 2,
	currentPage: 1,
	isLoading: false
}

const usersReducer = (state = initialState, action) =>
{
	switch (action.type)
	{
		case FOLLOW:
		{
			return {
				...state,
				users: state.users.map(u => u.id === action.id ? {...u, isFollowed: true} : u),
			}
		}
		case UNFOLLOW:
		{
			return {
				...state,
				users: state.users.map(u => u.id === action.id ? {...u, isFollowed: false} : u),
			}
		}
		case SET_USERS:
		{
			return {
				...state,
				users: action.users
			}
		}
		case SET_CURRENT_PAGE:
		{
			return {
				...state,
				currentPage: action.page
			}
		}
		case SET_TOTAL_USER_COUNT:
		{
			return {
				...state,
				totalUsersCount: action.count
			}
		}
		case TOGGLE_IS_LOADING:
		{
			return {
				...state,
				isLoading: action.isLoading
			}
		}
		default:
			return state;
	}
}

const followSuccess = (userID) => ({type: FOLLOW, id: userID})
const unfollowSuccess = (userID) => ({type: UNFOLLOW, id: userID})
const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
const setTotalUserCount = (count) => ({type: SET_TOTAL_USER_COUNT, count})
const toggleIsLoading = (isLoading) => ({type:TOGGLE_IS_LOADING, isLoading})

export const getUsers = (currentPage, pageSize) => (dispatch) =>
{
	dispatch(toggleIsLoading(true));
	API.getUsers(currentPage, pageSize).then(data => {
		dispatch(setUsers(data.items));
		dispatch(setTotalUserCount(data.totalCount));
		dispatch(toggleIsLoading(false));
	});
}
export const follow = (userID) => (dispatch) =>
{
	/*
	API.follow(userID).then(data => {
		if(data.resultCode === 0)
		{
			dispatch(followSuccess(userID));
		}
	});
	*/
	dispatch(followSuccess(userID));
}
export const unfollow = (userID) => (dispatch) =>
{
	/*
	API.unfollow(userID).then(data => {
		if(data.resultCode === 0)
		{
			dispatch(unfollowSucsess(userID));
		}
	});
	*/
	dispatch(unfollowSuccess(userID));
}

export default usersReducer;