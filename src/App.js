import style from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {getAuthData} from "./redux/reducers/authReducer";
import {Component} from "react";
import Preloader from "./components/common/Preloader/Preloader";
import NotFound from "./components/common/DefaultPage/NotFound";

class App extends Component
{
	componentDidMount()
	{
		this.props.getAuthData();
	}

	render()
	{
		if (this.props.isFetching) {
			return <Preloader/>
		}
		return (<div className={style.appWrapper}>

			<HeaderContainer/>
			<Navbar userID={this.props.userID} isAuth={this.props.isAuth}/>
			<div className={style.pageBody}>
				<Switch>
					<Route path="/profile/:id" render={() => <ProfileContainer/>}/>
					<Route path="/users" render={() => <UsersContainer/>}/>
					<Route path="/login" render={() => <LoginContainer/>}/>
					<Route exact path="/" render={() => this.props.isAuth ? <Redirect to={`/profile/${this.props.userID}`}/> : <Redirect to="/login"/> }/>
					<Route render={NotFound}/>
				</Switch>
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