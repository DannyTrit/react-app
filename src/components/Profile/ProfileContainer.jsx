import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, setProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component
{
	componentDidMount()
	{
		let userID = this.props.match.params.id;
		if(userID)
			this.props.getProfile(userID);
	}

	render()
	{
		if(!this.props.profile)
		{
			return <Preloader/>
		}
		return(
			<div>
				<Profile profile={this.props.profile} setProfile={this.props.setProfile}/>
			</div>
		)
	}
}



let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	userID: state.auth.userID
})
export default compose(
	connect(mapStateToProps,{getProfile,setProfile}),
	withRouter
)(ProfileContainer);