import userDefault from "../../../assets/img/UserDefault.png";
import appStyle from "../../../App.module.css";
import infoStyle from "./ProfileInfo.module.css"

const ProfilePhoto = (props) =>
{
	const onSelectFile = (event) =>
	{
		if(event.target.files.length)
		{
			props.setPhoto(event.target.files[0]);
		}
	}
	return (
		<div className={appStyle.contentBlock}>
			<div>
				<img className={infoStyle.profilePhoto} src={props.photos.large || userDefault}/>
			</div>
			<div>
				{props.isMyProfile && <label className={infoStyle.uploadPhoto}>
					<input type="file" onChange={onSelectFile} accept="image/*"/>
					Upload photo
				</label>}
			</div>
		</div>
	)
}
export default ProfilePhoto;