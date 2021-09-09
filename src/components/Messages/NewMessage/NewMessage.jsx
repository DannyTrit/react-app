const NewMessage = (props) =>
{
	return (
		<div>
			<textarea value={props.newMessageText}
						 onChange={(event)=>props.updateNewMessageText(event.target.value)}></textarea>
			<div>
				<button onClick={props.addNewMessage}>Send</button>
			</div>
		</div>
	);
}

export default NewMessage;