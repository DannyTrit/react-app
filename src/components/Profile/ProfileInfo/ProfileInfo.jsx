import {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css";
import {Form, Formik} from "formik";
import FormControls from "../../common/FormControls/FormControls";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) =>
{
	let [isFullInfoVisible, setFullInfoVisible] = useState(false);
	let [hasContacts, setHasContacts] =  useState(!!Object.keys(props.contacts).find(key=>props.contacts[key]));
	let [editMode, setEditMode] = useState(false);
	let [resultCode, setResultCode] = useState(-2);

	useEffect(() => {
		if(resultCode === 0)
		{
			setEditMode(false);
			setResultCode(-2);
		}
		else if(resultCode > 0)
		{
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
	return (
		<div>
			{!editMode ?
				<div>
					<button onClick={activateEditMode}>Edit</button>
					<div>{props.name}</div>
					<span onClick={ChangeFullInfoVisibility}>{isFullInfoVisible ? "Hide" : "Show"} full information</span>
					<div className={isFullInfoVisible || style.hidden}>
						<div>Looking for a job: {props.lookingForAJob}</div>
						<div className={props.skills || style.hidden}>Skills: {props.skills}</div>
						<div className={props.aboutMe || style.hidden}>About me: {props.aboutMe}</div>
						<div className={hasContacts || style.hidden}>Contacts
							{Object.keys(props.contacts).map(key =>
							{
								return <div className={props.contacts[key] || style.hidden}>{key}: {props.contacts[key]}</div>
							})}
						</div>
					</div>
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
						console.log("RESET");
						setEditMode(false);
					}}
				>
					<Form>
						{resultCode === -1 && <Preloader/>}
						<FormControls label="Name:" control="input" name="name"/>
						<FormControls label="Looking for a job:" control="checkbox" name="lookingForAJob"/>
						<FormControls label="Skills:" control="textarea" name="skills"/>
						<FormControls label="About me:" control="textarea" name="aboutMe"/>
						<FormControls label="Github:" control="input" name="github"/>
						<FormControls label="VK:" control="input" name="vk"/>
						<FormControls label="Facebook:" control="input" name="facebook"/>
						<FormControls label="Instagram:" control="input" name="instagram"/>
						<FormControls label="Twitter:" control="input" name="twitter"/>
						<FormControls label="Website:" control="input" name="website"/>
						<FormControls label="Youtube:" control="input" name="youtube"/>
						<FormControls label="Main link:" control="input" name="mainLink"/>
						<button type="submit">Save</button>
						<button type="reset" onClick={() => {}}>Cancel</button>
					</Form>
				</Formik>
			}
		</div>
	);
}

export default ProfileInfo;

/*
aboutMe
userId: required(integer)
lookingForAJob: required(boolean)
lookingForAJobDescription: required(string)
fullName: required(string)
contacts: {
	github: required(string)
	vk: required(string)
	facebook: required(string)
	instagram: required(string)
	twitter: required(string)
	website: required(string)
	youtube: required(string)
	mainLink: required(string)
}
*/
