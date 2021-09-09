import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {getAuthData} from "./redux/reducers/authReducer";
import {useEffect} from "react";

const App = (props) =>
{
	useEffect(props.getAuthData,[props.userID])
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Navbar/>
			<div className="app-wrapper-content">
				<Route path="/profile/:id" render={() => <ProfileContainer/>}/>
				<Route path="/messages" render={() => <MessagesContainer/>}/>
				<Route path="/users" render={() => <UsersContainer/>}/>
				<Route path="/login" render={() => <LoginContainer/>}/>
				<Route exact patch="*" render={() => props.isAuth ? <Redirect to={`/profile/${props.userID}`}/> : <Redirect to="/login"/> }/>
			</div>
		</div>);
}

const mapStateToProps = (state) =>
({
	isAuth: state.auth.isAuth,
	userID: state.auth.userID
})

export default connect(	mapStateToProps,{getAuthData})(App);