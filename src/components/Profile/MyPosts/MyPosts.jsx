import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import appStyle from "../../../App.module.css";
import myPostsStyle from "./MyPosts.module.css";
import noPostsImg from "../../../assets/img/no_posts.png";
import warningImg from "../../../assets/img/warning.png";

const MyPosts = (props) => {
	let posts = props.posts.map(item => <Post key={item.id}
														sender={item.sender}
														photo={props.photo}
														postText={item.text}
														likeCont={item.likeCount}/>);
	return (<>
		{props.isMyProfile && <div>
			 <NewPost addPost={props.addPost}/>
			{posts.length ? <>
				<div className={`${appStyle.contentBlock} ${myPostsStyle.warningBlock}`}>
					<img src={warningImg}/>
					<span className={myPostsStyle.warningText}>
						These posts can be seen only by yourself.<br/>No changes will be saved.
					</span>
				</div>
				{posts.reverse()} </>:
				<div className={`${appStyle.contentBlock} ${myPostsStyle.noPostsBlock}`}>
					<div>
						<img src={noPostsImg}/>
					</div>
					<div>
						<span className={myPostsStyle.noPostsText}>
							No posts here yet
						</span>
					</div>
				</div>}
		</div>}
	</>);
}

export default MyPosts;