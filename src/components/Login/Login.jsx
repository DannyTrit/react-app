import * as Yup from "yup";
import {Form, Formik} from "formik"
import FormControls from "../common/FormControls/FormControls";
import {Redirect} from "react-router-dom";

const Login = (props) =>
{
	const initialValues = ({
		email: "",
		password: "",
		rememberMe: false
	})
	const validationSchema = Yup.object({
		email: Yup.string()
		.required('Required'),
		password: Yup.string()
		.required('Required'),
	})

	return (
		<div>
			{props.isAuth && <Redirect to="/profile"/>}
			<Formik
				initialValues={initialValues}
				onSubmit={(values,{resetForm}) => {
					props.logIn(values.email, values.password);
					resetForm();
				}}
				validationSchema = {validationSchema}
			>
				<Form>
					<FormControls control="input" name="email" type="email"/>
					<FormControls control="input" name="password" type="password"/>
					<button type="submit">Log in</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Login;