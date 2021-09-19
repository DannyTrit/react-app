import {API} from "../../api/api";

const SET_AUTH_DATA = "authReducer/SET-AUTH-DATA";
const TOGGLE_IS_FETCHING = "authReducer/TOGGLE-IS-FETCHING"
const SET_CAPTCHA_URL = "authReducer/SET-CAPTCHA-URL";

const initialState = {
	userID: null,
	login: null,
	email: null,
	isAuth: false,
	isFetching: true,
	captchaUrl: null
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
		case SET_CAPTCHA_URL:
		{
			return {
				...state,
				captchaUrl: action.captchaUrl
			}
		}
		default:
			return state;
	}
}

const setAuthData = (userID, login, email, isAuth) => ({type: SET_AUTH_DATA, data: {userID, login, email, isAuth}});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});

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

export const logIn = (email, password, rememberMe, captcha, setResult) => async (dispatch) =>
{
	let response = await API.logIn(email, password, rememberMe, captcha);
	if(response.data.resultCode === 0)
	{
		dispatch(getAuthData());
	}
	else
	{
		setResult(response.data.resultCode, response.data.messages);
	}
}
export const logOut = () => async (dispatch) =>
{
	let response = await API.logOut();
	if(response.data.resultCode === 0)
	{
		dispatch(setAuthData(null,null,null, false));
	}
}
export const requestCaptcha = () => async (dispatch) =>
{
	let data = await API.getCaptcha();
	dispatch(setCaptchaUrl(data.url));
}
export default authReducer;