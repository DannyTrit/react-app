import styleClasses from "./Messages.module.css"
import {NavLink, Route} from "react-router-dom";
import NewMessage from "./NewMessage/NewMessage";

const Messages = (props) =>
{
	let dialogs = props.dialogs.map(item =>
		<div className={styleClasses.dialog}>
			<NavLink to={`/messages/${item.sender.id}`} activeClassName={styleClasses.navlinkActive}>{item.sender.name}</NavLink>
		</div>
	);
	let messages = props.dialogs.map(item =>
		<Route path={`/messages/${item.sender.id}`} render={
			() => item.messages.map(mes => <div className={styleClasses.message}>{mes.text}</div>)
		} />
	);
	return (
		<div className={styleClasses.content}>
			<div className={styleClasses.dialogs}>
				{dialogs}
			</div>
			<div className="messages">
				{messages}
			</div>
			<Route path="/messages/0" render={ () => <NewMessage
				addNewMessage={props.addNewMessage}
				updateNewMessageText={props.updateNewMessageText}
				newMessageText={props.newMessageText}/>
			}
			/>
		</div>
	);
}

export default Messages;