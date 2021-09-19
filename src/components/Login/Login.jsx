import * as Yup from "yup";
import {Form, Formik} from "formik"
import FormControls from "../common/FormControls/FormControls";
import {Redirect} from "react-router-dom";
import appStyle from "../../App.module.css";
import loginStyle from "./Login.module.css";
import {useState} from "react";

const Login = (props) =>
{

	let [resultCode, setResultCode] = useState(-2);
	let [errorMessages, setErrorMessages] = useState([]);

	const setResult = (resultCode, messages) =>
	{
		setResultCode(resultCode);
		setErrorMessages(messages);
		if(resultCode === 10)
		{
			props.requestCaptcha();
		}
	}
	const initialValues = ({
		email: "",
		password: "",
		rememberMe: false,
		captcha: ""
	})
	const validationSchema = Yup.object({
		email: Yup.string()
		.required("Required").email("Invalid e-mail format."),
		password: Yup.string()
		.required("Required"),
	})
	return (
		<div className={`${appStyle.contentBlock} ${loginStyle.pageContent}`}>
			{props.isAuth && <Redirect to={`/profile/${props.userID}`}/>}
			<Formik
				initialValues={initialValues}
				onSubmit={(values,{resetForm}) => {
					props.logIn(values.email, values.password, values.rememberMe, values.captcha, setResult);
					resetForm();
					setResultCode(-1);
				}}
				validationSchema = {validationSchema}
			>
				<Form className={loginStyle.formStyle}>
					<FormControls control="input" name="email" type="email" placeholder="E-mail"/>
					<FormControls control="input" name="password" type="password" placeholder="Password"/>
					<FormControls label="Remember me" control="checkbox" name="rememberMe"/>
					{resultCode > 0 && <div className={appStyle.errorMessageBlock}>
						{errorMessages.map((message, index) => <div key={index}>{message}</div>)}
					</div>}
					{resultCode === 10 && <div className={loginStyle.captchaBlock}>
						<img src={props.captchaUrl}/>
						<FormControls control="input" name="captcha"/>
					</div>}
					<button disabled={resultCode === -1} className={appStyle.appButton} type="submit">Log in</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Login;