import userDefault from "../../../assets/img/UserDefault.png";

const ProfilePhoto = (props) =>
{
	const onSelectFile = (event) =>
	{
		if(event.target.files.length)
		{
			props.setPhoto(event.target.files[0]);
		}
	}
	debugger;
	return (
		<div>
			<div>
				<img src={props.photos.large || userDefault}/>
			</div>
			<div>
				{props.isMyProfile && <input type="file" onChange={onSelectFile} accept="image/*"/>}
			</div>
		</div>
	)
}
export default ProfilePhoto;