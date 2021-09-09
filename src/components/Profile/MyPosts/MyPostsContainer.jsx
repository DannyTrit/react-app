import {connect} from "react-redux";
import {addPost} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) =>
{
	return {
		posts: state.profilePage.posts
	}
}
export default connect(mapStateToProps, {addPost})(MyPosts);