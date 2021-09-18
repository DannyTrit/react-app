import {useEffect, useState} from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import FormControls from "../../common/FormControls/FormControls";
import Preloader from "../../common/Preloader/Preloader";
import appStyle from "../../../App.module.css";
import infoStyle from "./ProfileInfo.module.css";
import controlsStyle from "../../common/FormControls/Controls.module.css";

const ProfileInfo = (props) =>
{
	let [isFullInfoVisible, setFullInfoVisible] = useState(false);
	let [hasContacts, setHasContacts] =  useState(!!Object.keys(props.contacts).find(key=>props.contacts[key]));
	let [editMode, setEditMode] = useState(false);
	let [resultCode, setResultCode] = useState(-2);
	let [errorMessages, setErrorMessages] = useState([]);
	let [isEditBtnVisible, setEditBtnVisible] = useState(-1);
	useEffect(() => {
		if(resultCode === 0)
		{
			setEditMode(false);
			setResultCode(-2);
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
	const setResult = (resultCode, messages) =>
	{
		setResultCode(resultCode);
		setErrorMessages(messages);
	}

	return (
		<div className={`${appStyle.contentBlock}`}>
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
								<div className={controlsStyle.controlContainer}>
									<div className={controlsStyle.label}>Looking for a job:</div>
									<div>{`${props.lookingForAJob}`}</div>
								</div>
								{!!props.skills && <div className={controlsStyle.controlContainer}>
									<div className={controlsStyle.label}>Skills:</div>
									<div>{props.skills}</div>
								</div>}
								{!!props.aboutMe && <div className={controlsStyle.controlContainer}>
									<div className={controlsStyle.label}>About me:</div>
									<div>{props.aboutMe}</div>
								</div>}
							</div>
							{hasContacts && <div className={infoStyle.division} onMouseEnter={() => onEnter(1)} onMouseLeave={onLeave}>
								<span className={infoStyle.divisionName}>Contacts</span>
								{props.isMyProfile && isEditBtnVisible === 1 && <span className={infoStyle.editModeBtn} onClick={activateEditMode}>Edit</span>}
								{Object.keys(props.contacts).filter(key=>props.contacts[key]).map(key =>
								{
									return <div className={controlsStyle.controlContainer} key={key}>
										<div className={controlsStyle.label}>{key}:</div>
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
					validationSchema={Yup.object({
						github: Yup.string()
							.matches(/github\.com/,"Invalid url format. (e.g. github.com/example)"),
						vk: Yup.string()
							.matches(/vk\.com/,"Invalid url format. (e.g. vk.com/example)"),
						facebook: Yup.string()
							.matches(/facebook\.com/,"Invalid url format. (e.g. facebook.com/example)"),
						instagram: Yup.string()
							.matches(/instagram\.com/,"Invalid url format. (e.g. instagram.com/example)"),
						twitter: Yup.string()
							.matches(/twitter\.com/,"Invalid url format. (e.g. twitter.com/example)"),
						website: Yup.string()
							.matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}$/,"Invalid url format. (e.g. example.com)"),
						youtube: Yup.string()
							.matches(/youtube\.com/,"Invalid url format. (e.g. youtube.com/example)"),
						mainLink: Yup.string()
						.matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}$/,"Invalid url format. (e.g. example.com)")
					})}
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
						props.setProfile(profile, setResult);
					}}
					onReset={(values, {resetForm}) =>
					{
						setEditMode(false);
					}}
				>
					<Form>
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
						{resultCode === -1 && <Preloader/>}
						{resultCode > 0 && <div className={appStyle.errorMessageBlock}>
							{errorMessages.map((message, index) => <div key={index}>{message}</div>)}
						</div>}
						<div className={infoStyle.buttonsBlock}>
							<button className={appStyle.appButton} type="submit">Save</button>
							<button className={appStyle.appButton} type="reset" onClick={() => {}}>Cancel</button>
						</div>
					</Form>
				</Formik>
			}
		</div>
	);
}

export default ProfileInfo;