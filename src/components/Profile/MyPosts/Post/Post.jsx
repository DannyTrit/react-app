import postStyle from "./Post.module.css"
import UserDefault from "../../../../assets/img/UserDefault.png"
import appStyle from "../../../../App.module.css";

const Post = (props) =>
{

   return(
      <div className={appStyle.contentBlock}>
         <div className={postStyle.postHeader}>
            <img className={postStyle.personPhoto} src={props.photo || UserDefault}/>
            <span className={postStyle.personName}>{props.sender}</span>
         </div>
         <div className={postStyle.postContent}>
            <div>
               <span>{props.postText}</span>
            </div>
            <div>
               <span>likes: {props.likeCont}</span>
            </div>
         </div>
      </div>
   );
}

export default Post;