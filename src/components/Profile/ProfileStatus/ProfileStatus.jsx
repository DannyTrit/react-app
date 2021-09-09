import React, {useEffect, useState} from "react";

const ProfileStatus = (props) =>
{
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {setStatus(props.status)}, [props.status]);
	
	const activateEditMode = () =>
	{
		setEditMode(true);
	}
	const deactivateEditMode = () =>
	{
		//props.setStatus(status)
		setEditMode(false);
	}
	const onChangeStatus = (e) => {
		setStatus(e.target.value);
	}
	return (
		<div>
			{editMode ?
				<input onBlur={deactivateEditMode} onChange={onChangeStatus} autoFocus={true} value={status}/> :
				<span onClick={activateEditMode}>{props.status}</span>}
		</div>
	)
}

export default ProfileStatus;