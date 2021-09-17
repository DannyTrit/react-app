import {useEffect, useState} from "react";
import {Form, Formik} from "formik";
import FormControls from "../../common/FormControls/FormControls";
import Preloader from "../../common/Preloader/Preloader";
import appStyle from "../../../App.module.css";
import infoStyle from "./ProfileInfo.module.css";

const ProfileInfo = (props) =>
{
	let [isFullInfoVisible, setFullInfoVisible] = useState(false);
	let [hasContacts, setHasContacts] =  useState(!!Object.keys(props.contacts).find(key=>props.contacts[key]));
	let [editMode, setEditMode] = useState(false);
	let [resultCode, setResultCode] = useState(-2);
	let [isEditBtnVisible, setEditBtnVisible] = useState(-1);

	useEffect(() => {
		if(resultCode === 0)
		{
			setEditMode(false);
			setResultCode(-2);
		}
		else if(resultCode > 0)
		{
			//TODO: change error notification
			alert("some error");
		}
	},[resultCode])

	useEffect(()=>{
		setHasContacts(!!Object.keys(props.contacts).find(key=>props.contacts[key]))
	},[props.contacts])

	const ChangeFullInfoVisibility = () =>
	{
		setFullInfoVisible(!isFullInfoVisible);
	}
	const activateEditMode = () =>
	{
		setEditMode(true);
	}
	const onEnter = (id) =>
	{
		setEditBtnVisible(id);
	}
	const onLeave = () =>
	{
		setEditBtnVisible(-1);
	}

	return (
		<div className={appStyle.contentBlock}>
			{!editMode  ?
				<div>
					<span className={infoStyle.pageName}>{props.name}</span>
					<div className={infoStyle.fullInfoBtnBlock}>
						<span className={infoStyle.fullInfoBtn} onClick={ChangeFullInfoVisibility}>{isFullInfoVisible ? "Hide" : "Show"} full information</span>
					</div>
					{isFullInfoVisible &&
						<div>
							<div className={infoStyle.division} onMouseEnter={() => onEnter(0)} onMouseLeave={onLeave}>
								<span className={infoStyle.divisionName}>Main information</span>
								{props.isMyProfile && isEditBtnVisible === 0 && <span className={infoStyle.editModeBtn} onClick={activateEditMode}>Edit</span>}
								<div className={infoStyle.controlBlock}>
									<div className={infoStyle.label}>Looking for a job:</div>
									<div>{`${props.lookingForAJob}`}</div>
								</div>
								{!!props.skills && <div className={infoStyle.controlBlock}>
									<div className={infoStyle.label}>Skills:</div>
									<div>{props.skills}</div>
								</div>}
								{!!props.aboutMe && <div className={infoStyle.controlBlock}>
									<div className={infoStyle.label}>About me:</div>
									<div>{props.aboutMe}</div>
								</div>}
							</div>
							{hasContacts && <div className={infoStyle.division} onMouseEnter={() => onEnter(1)} onMouseLeave={onLeave}>
								<span className={infoStyle.divisionName}>Contacts</span>
								{props.isMyProfile && isEditBtnVisible === 1 && <span className={infoStyle.editModeBtn} onClick={activateEditMode}>Edit</span>}
								{Object.keys(props.contacts).filter(key=>props.contacts[key]).map(key =>
								{
									return <div className={infoStyle.controlBlock} key={key}>
										<div className={infoStyle.label}>{key}:</div>
										<div>{props.contacts[key]}</div>
									</div>
								})}
							</div>}
						</div>
					}
				</div> :
				<Formik
					initialValues={{
						"name": props.name,
						"lookingForAJob": props.lookingForAJob,
						"skills": props.skills,
						"aboutMe": props.aboutMe,
						"github": props.contacts.github,
						"vk": props.contacts.vk,
						"facebook": props.contacts.facebook,
						"instagram": props.contacts.instagram,
						"twitter": props.contacts.twitter,
						"website": props.contacts.website,
						"youtube": props.contacts.youtube,
						"mainLink": props.contacts.mainLink,
					}}
					onSubmit={ (values) =>
					{
						let profile = {
							userId: props.userID,
							fullName: values.name,
							lookingForAJob: values.lookingForAJob,
							lookingForAJobDescription: values.skills,
							aboutMe: values.aboutMe,
							contacts: {
								github: values.github,
								vk: values.vk,
								facebook: values.facebook,
								instagram: values.instagram,
								twitter: values.twitter,
								website: values.website,
								youtube: values.youtube,
								mainLink: values.mainLink
							}
						}
						setResultCode(-1);
						props.setProfile(profile, setResultCode);
					}}
					onReset={(values, {resetForm}) =>
					{
						setEditMode(false);
					}}
				>
					<Form>
						{resultCode === -1 && <Preloader/>}
						<FormControls label="Name:" control="input" name="name"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label}/>
						<FormControls label="Looking for a job:" control="checkbox" name="lookingForAJob"
										  controlBlockClassName={infoStyle.controlBlock}

										  labelClassName={infoStyle.label} />
						<FormControls label="Skills:" control="textarea" name="skills"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.textarea}
										  labelClassName={infoStyle.label}/>
						<FormControls label="About me:" control="textarea" name="aboutMe"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.textarea}
										  labelClassName={infoStyle.label}/>
						<FormControls label="Github:" control="input" name="github"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label}/>
						<FormControls label="VK:" control="input" name="vk"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label} />
						<FormControls label="Facebook:" control="input" name="facebook"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label}/>
						<FormControls label="Instagram:" control="input" name="instagram"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label}/>
						<FormControls label="Twitter:" control="input" name="twitter"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label}/>
						<FormControls label="Website:" control="input" name="website"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label}/>
						<FormControls label="Youtube:" control="input" name="youtube"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label}/>
						<FormControls label="Main link:" control="input" name="mainLink"
										  controlBlockClassName={infoStyle.controlBlock}
										  controlClassName={infoStyle.input}
										  labelClassName={infoStyle.label}/>
						<button type="submit">Save</button>
						<button type="reset" onClick={() => {}}>Cancel</button>
					</Form>
				</Formik>
			}
		</div>
	);
}

export default ProfileInfo;