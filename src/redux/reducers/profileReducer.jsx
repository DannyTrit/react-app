import {API} from "../../api/api";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
	posts: [{id: 0, sender: "Vick", text: "That was hard", likeCount: 10},
		{id: 1, sender: "Mike", text: "Rly man?", likeCount: 4}
	],
	profile: null
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
				profile: {...state.profile,...action.profile}
			}
		}
		default:
			return state;
	}
}

export const addPost = (text) => ({type: ADD_POST, text});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userID) => async (dispatch) =>
{
	let data = await API.getProfile(userID)
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

export default profileReducer;