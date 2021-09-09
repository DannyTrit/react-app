import {addNewMessage, updateNewMessageText} from "../../redux/reducers/messagesReducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../HOCs/redirect/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) =>
{
	return {
		dialogs: state.messagesPage.dialogs,
		newMessageText: state.messagesPage.newMessageText,
	}
}

export default compose(
	connect(mapStateToProps, {addNewMessage, updateNewMessageText}),
	withAuthRedirect
)(Messages)