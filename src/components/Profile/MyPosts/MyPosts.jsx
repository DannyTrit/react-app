import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import styleClasses from  "./MyPosts.module.css"

const MyPosts = (props) => {
	let posts = props.posts.map(item => <Post key={item.id}
														sender={item.sender}
														photo={props.photo}
														postText={item.text}
														likeCont={item.likeCount}/>);
	return(
		<div className={styleClasses.wall}>
			<h2>My Posts</h2>
			<NewPost addPost={props.addPost}/>
			{posts.reverse()}
		</div>
	);
}

export default MyPosts;