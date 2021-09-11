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
import {Component, useEffect} from "react";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component
{
	componentDidMount()
	{
		this.props.getAuthData();
	}

	render()
	{
		console.log(`${this.props.isAuth} ${this.props.userID}`)
		if (this.props.isFetching) {
			return <Preloader/>
		}
		return (<div className="app-wrapper">

			<HeaderContainer/>
			<Navbar userID={this.props.userID}/>
			<div className="app-wrapper-content">
				<Route path="/profile/:id" render={() => <ProfileContainer/>}/>
				<Route path="/messages" render={() => <MessagesContainer/>}/>
				<Route path="/users" render={() => <UsersContainer/>}/>
				<Route path="/login" render={() => <LoginContainer/>}/>
				{/*<Route render={() => props.isAuth ? <Redirect to={`/profile/${props.userID}`}/> : <Redirect to="/login"/> }/>*/}
			</div>
		</div>);
	}
}

const mapStateToProps = (state) =>
({
	isAuth: state.auth.isAuth,
	userID: state.auth.userID,
	isFetching: state.auth.isFetching
})

export default connect(	mapStateToProps,{getAuthData})(App);