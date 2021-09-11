import React, {useState} from "react";

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
		<div>
			{editMode ?
				<input onBlur={deactivateEditMode} onChange={onChangeStatus} autoFocus={true} value={status} maxLength="300"/> :
				<span onClick={activateEditMode}>{props.status || "Set status"}</span>}
		</div>
	)
}

export default ProfileStatus;