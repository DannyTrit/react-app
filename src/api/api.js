import axios from "axios";

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
		return instance.get(`users?page=${Math.max(page, 1)}&count=${Math.min(Math.max(pageSize, 1), 100)}`).then(response => response.data);
	},
	unfollow(userID)
	{
		return instance.delete(`follow/${userID}`).then(response => response.data);
	},
	follow(userID)
	{
		return instance.post(`follow/${userID}`).then(response => response.data);
	},

	getProfile(userID)
	{
		return instance.get(`profile/${userID}`).then(response => response.data);
	},
	setProfile(data)
	{
		return instance.put(`profile`, data);
	},
	getStatus(userID)
	{
		return instance.get(`profile/status/${userID}`).then(response => response.data);
	},
	setStatus(data)
	{
		return instance.put(`profile/status`, data);
	},
	setPhoto(file)
	{
		const formData = new FormData();
		formData.append("image", file);
		return instance.put(`/profile/photo`, formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}).then(response => response.data);
	},

	getAuth()
	{
		return instance.get(`auth/me`);
	},
	logIn(email, password, rememberMe= false, captcha="")
	{
		return instance.post(`auth/login`, {email, password, rememberMe, captcha});
	},
	logOut()
	{
		return instance.delete(`auth/login`);
	},
	getCaptcha()
	{
		return instance.get(`security/get-captcha-url`).then(response => response.data);
	},
}