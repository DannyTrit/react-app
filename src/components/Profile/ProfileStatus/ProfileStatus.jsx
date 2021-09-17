import React, {useState} from "react";
import appStyle from "../../../App.module.css";
import profileStyle from "../Profile.module.css";
import statusStyle from "./ProfileStatus.module.css"

const ProfileStatus = (props) =>
{
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	
	const activateEditMode = () =>
	{
		setEditMode(props.isMyProfile);
	}
	const deactivateEditMode = () =>
	{
		if(status !== props.status)
		{
			props.setStatus(status)
		}
		setEditMode(false);
	}
	const onChangeStatus = (e) => {
		setStatus(e.target.value);
	}
	return (
		<div className={`${appStyle.contentBlock}`}>
			{editMode ?
				<div>
					<input className={statusStyle.editModeInput}
							 placeholder="Set status"
							 onChange={onChangeStatus}
							 onBlur={deactivateEditMode}
							 onKeyDown={e => {e.key === "Enter" && deactivateEditMode()}}
							 autoFocus={true}
							 value={status}
							 maxLength="300"/>
					<button type="submit"  onClick={deactivateEditMode}>Save</button>
				</div>:
				<span className={`${props.isMyProfile ? statusStyle.statusSpan : ""} 
										${props.status ? profileStyle.profileStatusFilled : profileStyle.profileStatusEmpty}`}
					onClick={activateEditMode}>{props.status || "Set status"}</span>}
		</div>
	)
}

export default ProfileStatus;