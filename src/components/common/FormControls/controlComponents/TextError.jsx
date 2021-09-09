import styleClasses from "./Controls.module.css"
const TextError = (props) =>
{
	return(
		<span className={styleClasses.textError}>
			{props.value}
		</span>
	);
}

export default TextError;