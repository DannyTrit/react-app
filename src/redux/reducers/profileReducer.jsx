import {API} from "../../api/api";
const ADD_POST = "profileReducer/ADD-POST";
const SET_USER_PROFILE = "profileReducer/SET-USER-PROFILE";
const SET_USER_STATUS = "profileReducer/SET-USER-STATUS";
const SET_USER_PHOTOS = "profileReducer/SET-USER-PHOTOS";

const initialState = {
	posts: [{id: 0, sender: "Vick", text: "That was hard", likeCount: 10},
		{id: 1, sender: "Mike", text: "Rly man?", likeCount: 4}
	],
	profile: null,
	status: null
}

const profileReducer = (state = initialState, action) =>
{
	switch (action.type)
	{
		case ADD_POST:
		{
			let post = {id: state.posts.length,
				sender: state.profile.fullName,
				text: action.text,
				likeCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, post]
			}

		}
		case SET_USER_PROFILE:
		{
			return {
				...state,
				profile: {
					...state.profile,
					...action.profile
				}
			}
		}
		case SET_USER_STATUS:
		{
			return {
				...state,
				status: action.status
			}
		}
		case SET_USER_PHOTOS:
		{
			return {
				...state,
				profile: {
					...state.profile,
					photos:{...action.photos}
				}
			}
		}
		default:
			return state;
	}
}

export const addPost = (text) => ({type: ADD_POST, text});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
const setUserPhoto = (photos) => ({type: SET_USER_PHOTOS, photos})

export const requestStatus = (userID) => async (dispatch) =>
{
	let data = await API.getStatus(userID);
	dispatch(setUserStatus(data));
}
export const setStatus = (status) => async (dispatch) =>
{
	let response = await API.setStatus({status});
	if(response.data.resultCode === 0)
	{
		dispatch(setUserStatus(status));
	}
}
export const getProfile = (userID) => async (dispatch) =>
{
	let data = await API.getProfile(userID);
	dispatch(setUserProfile({...data}));
}
export const setProfile = (profile, setResultCode) => async (dispatch) =>
{
	let response = await API.setProfile(profile);
	if(response.data.resultCode === 0)
	{
		dispatch(setUserProfile(profile))
	}
	setResultCode(response.data.resultCode);
}
export const setPhoto = (file) => async (dispatch) =>
{
	let data = await API.setPhoto(file);
	if(data.resultCode === 0)
	{
		dispatch(setUserPhoto(data.data.photos))
	}
}

export default profileReducer;