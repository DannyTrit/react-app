import {Formik, Form} from "formik";
import * as Yup from 'yup';
import FormControls from "../../../common/FormControls/FormControls";

const NewPost = (props) =>
{
	return (
		<div>
			<Formik
				initialValues={ { postText: ""} }
				onSubmit={(values, {resetForm}) => {
					if(values.postText)
					{
						props.addPost(values.postText);
						resetForm();
					}
				}}
				validationSchema={Yup.object({
					postText: Yup.string()
					.max(50, 'Must be 50 characters or less')
				})}
			>
				<Form>
					<FormControls placeholder="Type new post..." control="textarea" name="postText"/>
					<button>Post</button>
				</Form>
			</Formik>
		</div>
	);
}

export default NewPost;