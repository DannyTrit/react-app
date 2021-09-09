import axios from "axios";

const axiosInstance = axios.create(
	{
		baseURL: "http://localhost:3001/",
		//withCredentials: true,
		//headers: { "API-KEY": "0000-0000-0000-0000" },
	}
);

const instance = axios.create(
	{
		baseURL: "https://social-network.samuraijs.com/api/1.0/",
		withCredentials: true,
		headers: {"API-KEY": "7889b81e-5a11-49fc-bb34-6c697d5533d0"}
	}
)

export const API = {
	getUsers(page = 1, pageSize = 10)
	{
		return instance.get(`users?page=${page}&count=${Math.min([pageSize, 100])}`).then(response => response.data);
	},
	unfollow(userID)
	{
		return instance.delete(`follow/${userID}`).then(response => response.data);
	},
	follow(userID)
	{
		return instance.post(`follow/${userID}`).then(response => response.data);
	},

	getAuth()
	{
		return instance.get(`auth/me`);
	},
	getProfile(userID)
	{
		return instance.get(`profile/${userID}`).then(response => response.data);
	},
	setProfile(data)
	{
		return instance.put(`profile`, data);
	},

	/*
	userId: required(integer)
	lookingForAJob: required(boolean)
	lookingForAJobDescription: required(string)
	fullName: required(string)
	contacts: required(object)
		github: required(string)
		vk: required(string)
		facebook: required(string)
		instagram: required(string)
		twitter: required(string)
		website: required(string)
		youtube: required(string)
		mainLink: required(string)
	 */

	//email = "lenik47250@drlatvia.com", password = "free"
	logIn(email, password)
	{
		return instance.post(`auth/login`, {email, password});
	},
	logOut()
	{
		return instance.delete(`auth/login`);
	}
}