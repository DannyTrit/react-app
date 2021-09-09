import {API} from "../../api/api";

const SET_AUTH_DATA = "SET-AUTH-DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

const initialState = {
	userID: null,
	login: null,
	email: null,
	isAuth: false,
	isFetching: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type)
	{
		case SET_AUTH_DATA:
		{
			return {
				...state,
				...action.data
			}
		}
		case TOGGLE_IS_FETCHING:
		{
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		default:
			return state;
	}
}

const setAuthData = (userID, login, email, isAuth) => ({type: SET_AUTH_DATA, data: {userID, login, email, isAuth}});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getAuthData = () => async (dispatch) =>
{
	dispatch(toggleIsFetching(true));
	let response = await API.getAuth();
	if(response.data.resultCode === 0)
	{
		let {id, email, login} = response.data.data;
		dispatch(setAuthData(id, login, email, true));
	}
	dispatch(toggleIsFetching(false));
}

export const logIn = (email, password) => async (dispatch) =>
{
	let response = await API.logIn(email, password)
	if(response.data.resultCode === 0)
	{
		dispatch(getAuthData());
	}
}
export const logOut = () => async (dispatch) =>
{
	let response = await API.logOut()
	if(response.data.resultCode === 0)
	{
		//dispatch(setIsAuth(false));
		dispatch(setAuthData(null,null,null, false));
	}
}
export default authReducer;