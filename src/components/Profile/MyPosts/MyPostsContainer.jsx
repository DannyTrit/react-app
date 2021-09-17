import {connect} from "react-redux";
import {addPost} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) =>
({
	posts: state.profilePage.posts,
	photo: state.profilePage.profile.photos.small
})
export default connect(mapStateToProps, {addPost})(MyPosts);