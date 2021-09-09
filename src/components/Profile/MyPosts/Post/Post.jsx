import styleClasses from "./Post.module.css"
import UserDefault from "../../../../assets/img/UserDefault.png"

const Post = (props) =>
{
   return(
      <div className={styleClasses.post}>
         <div className={styleClasses.person}>
            <img src={props.photo || UserDefault}/>
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