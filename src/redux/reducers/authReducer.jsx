import {API} from "../../api/api";

const SET_AUTH_DATA = "SET-AUTH-DATA";
const SET_IS_AUTH = "SET-IS-AUTH";

const initialState = {
	userID: null,
	login: null,
	email: null,
	isAuth: false
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
		case SET_IS_AUTH:
		{
			return {
				...state,
				isAuth: action.isAuth
			}
		}
		default:
			return state;
	}
}

const setAuthData = (userID, login, email) => ({type: SET_AUTH_DATA, data: {userID, login, email}});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})

export const getAuthData = () => async (dispatch) =>
{
	let response = await API.getAuth();
	if(response.data.resultCode === 0)
	{
		let {id, email, login} = response.data.data;
		dispatch(setIsAuth(true));
		dispatch(setAuthData(id, login, email));
	}
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
		dispatch(setIsAuth(false));
		dispatch(setAuthData(null,null,null));
	}
}
export default authReducer;