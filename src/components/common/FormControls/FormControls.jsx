import {Field, useField} from "formik";
import styleClasses from "./controlComponents/Controls.module.css";
import TextError from "./controlComponents/TextError";

const FormControls = (props) =>
{
	const {control, ...restProps} = props;
	switch (control)
	{
		case "textarea":
			restProps.as = control;
		case "input":
		{
			restProps.className = styleClasses.textInput;
			break;
		}
		case "checkbox":
		{
			restProps.type = control;
			break;
		}
	}
	return <Control {...restProps}/>
}

const Control = (props) =>
{
	const {name, label, className, ...restProps} = props;
	const [field, meta] = useField(props);
	return(
		<div>
			<div>
				<label htmlFor={name}>{label}</label>
				<Field className={`${className || ""} ${ meta.error ? styleClasses.error : ""}`} id={name} name={name} {...restProps} />
			</div>
			{meta.error && meta.touched  ? <TextError value={meta.error}/> : null}
		</div>
	);
}

export default FormControls;