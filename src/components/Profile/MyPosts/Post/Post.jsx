import styleClasses from "./Post.module.css"

const Post = (props) =>
{
   return(
      <div className={styleClasses.post}>
         <div className={styleClasses.person}>
            <img src="https://sun9-29.userapi.com/impg/et9jmtMhdI6skPOSk5mEtJvdXH6dBetVFnAxjA/OZtbcbZGl_I.jpg?size=1080x1080&quality=96&sign=22bf5bf409608f6e9b4a4e1fc4675e4a&type=album"/>
            {props.sender}
         </div>
         <div>
            {props.postText}
         </div>
         <div>
            likes: {props.likeCont}
         </div>
      </div>
   );
}

export default Post;