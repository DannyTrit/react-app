import {API} from "../../api/api";
import {updateItemInArray} from "../../utils/utils";

const FOLLOW = "usersReducer/FOLLOW";
const UNFOLLOW = "usersReducer/UNFOLLOW";
const SET_USERS = "usersReducer/SET-USERS";
const SET_CURRENT_PAGE = "usersReducer/SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "usersReducer/SET-TOTAL-USER-COUNT";
const TOGGLE_IS_FETCHING = "usersReducer/TOGGLE-IS-FETCHING";
const SET_USER_FOLLOWING_IN_PROGRESS = "usersReducer/SET-USER-FOLLOWING-IN-PROGRESS";
const REMOVE_USER_FOLLOWING_IN_PROGRESS = "usersReducer/REMOVE-USER-FOLLOWING-IN-PROGRESS";

const initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 10,
	currentPage: 1,
	isFetching: false,
	usersFollowingInProgress: []
}

const usersReducer = (state = initialState, action) =>
{
	switch (action.type)
	{
		case FOLLOW:
		{
			return {
				...state,
				users: updateItemInArray(state.users, "id", action.userID, {followed: true})
			}
		}
		case UNFOLLOW:
		{
			return {
				...state,
				users: updateItemInArray(state.users, "id", action.userID, {followed: false})
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
		case TOGGLE_IS_FETCHING:
		{
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case SET_USER_FOLLOWING_IN_PROGRESS:
		{
			return {
				...state,
				usersFollowingInProgress: [...state.usersFollowingInProgress, action.userID]
			}
		}
		case REMOVE_USER_FOLLOWING_IN_PROGRESS:
		{
			return {
				...state,
				usersFollowingInProgress: state.usersFollowingInProgress.filter(id => id !== action.userID)
			}
		}

		default:
			return state;
	}
}

const followSuccess = (userID) => ({type: FOLLOW, userID})
const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
const setUsers = (users) => ({type: SET_USERS, users})
const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
const setTotalUsersCount = (count) => ({type: SET_TOTAL_USER_COUNT, count})
const toggleIsLoading = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
const setUserFollowingInProgress = (userID) => ({type:SET_USER_FOLLOWING_IN_PROGRESS, userID})
const removeUserFollowingInProgress = (userID) => ({type:REMOVE_USER_FOLLOWING_IN_PROGRESS, userID})

export const getUsers = (currentPage, pageSize) => async (dispatch) =>
{
	dispatch(toggleIsLoading(true));
	dispatch(setCurrentPage(currentPage));
	let data = await API.getUsers(currentPage, pageSize)
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));

	dispatch(toggleIsLoading(false));
}
export const follow = (userID) => async (dispatch) =>
{
	dispatch(setUserFollowingInProgress(userID));
	let data = await API.follow(userID)
	if(data.resultCode === 0)
	{
		dispatch(followSuccess(userID));
	}
	dispatch(removeUserFollowingInProgress(userID));
}
export const unfollow = (userID) => async (dispatch) =>
{
	dispatch(setUserFollowingInProgress(userID));
	let data = await API.unfollow(userID)
	if(data.resultCode === 0)
	{
		dispatch(unfollowSuccess(userID));
	}
	dispatch(removeUserFollowingInProgress(userID));
}


export default usersReducer;