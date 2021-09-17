import {Formik, Form} from "formik";
import * as Yup from 'yup';
import FormControls from "../../../common/FormControls/FormControls";
import appStyle from "../../../../App.module.css";
import newPostStyle from "./NewPost.module.css";

const NewPost = (props) =>
{
	return (
		<div className={appStyle.contentBlock}>
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
					<FormControls controlClassName={newPostStyle.textarea} placeholder="Type new post..." control="textarea" name="postText"/>
					<button>Post</button>
				</Form>
			</Formik>
		</div>
	);
}

export default NewPost;