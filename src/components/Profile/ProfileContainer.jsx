import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, requestStatus, setPhoto, setProfile, setStatus} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOCs/redirect/withAuthRedirect";

const ProfileContainer = (props) =>
{
	useEffect(() => {
		let userID = props.match.params.id;

		if(userID)
		{
			props.getProfile(userID);
			props.requestStatus(userID);
		}
	},[props.match.params.id])

	if(!props.profile)
	{
		return <Preloader/>
	}
	return(
		<div>
			<Profile isMyProfile={props.authorizedUserID === props.profile.userId}
						profile={props.profile}
						setProfile={props.setProfile}
						status={props.status}
						setStatus={props.setStatus}
						setPhoto={props.setPhoto}
			/>
		</div>
	)

}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	authorizedUserID: state.auth.userID,
	status: state.profilePage.status
})
export default compose(
	connect(mapStateToProps,{getProfile,setProfile, setStatus, requestStatus, setPhoto}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);