import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import messagesReducer from "./reducers/messagesReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	usersPager: usersReducer,
	auth: authReducer
})
const store = createStore(reducers, applyMiddleware(thunk));

export default store;