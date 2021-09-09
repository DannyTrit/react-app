const ADD_MESSGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


//messages page
const initialState = {
	dialogs: [
		{
			sender: {name: "Vick", id: 0},
			messages: [{text: "C'mon get out of there"}, {text: "I really hate this"},]
		},
		{
			sender: {name: "Mike", id: 1},
			messages: [{text: "I told you before..."}, {text: "OMG man"},]
		},
	],
	newMessageText: "",
};

const messagesReducer = (state= initialState, action) =>
{
	switch (action.type)
	{
		case ADD_MESSGE:
		{
			if(state.newMessageText)
			{
				let dialogs = [...state.dialogs];
				dialogs[action.dialogID].messages = [...state.dialogs[action.dialogID].messages, {text: state.newMessageText}]
				return {
					...state,
					dialogs: dialogs,
					newMessageText: ""
				}
			}
		}
		case UPDATE_NEW_MESSAGE_TEXT:
		{
			return {
				...state,
				newMessageText: action.text
			}
		}
		default: return state;
	}
}

export const addNewMessage = (dialogID = 0) => ({type: ADD_MESSGE,	dialogID: dialogID})
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text,})
export default messagesReducer;
