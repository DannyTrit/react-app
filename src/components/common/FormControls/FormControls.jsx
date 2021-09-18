import {Field, useField} from "formik";
import controlsStyle from "./Controls.module.css";
import TextError from "./TextError";

/**
 * @name FormControls
 * @description Form control creator
 * @param {string} control Type of control (e.g. textarea, input, checkbox)
 * @param {string} controlContainerClassName Control block style class name
 * @param {string} controlClassName Control style class name
 * @param {string} label Label value
 * @param {string} labelClassName Label style class name
 * @param {string} name Name of control (Formik required)
 * @param {*} restProps Any others properties
 */
const FormControls = ({control,
	controlContainerClassName = controlsStyle.controlContainer,
	controlClassName,
	label,
	labelClassName= controlsStyle.label,
	name,
	...restProps}) =>
{
	switch (control)
	{
		case "input":
		{
			controlClassName = controlClassName || controlsStyle.input;
			break;
		}
		case "textarea":
		{
			controlClassName = controlClassName || controlsStyle.textarea;
			restProps.as = control;
			break;
		}
		case "checkbox":
		{
			restProps.type = control;
			break;
		}
	}
	return <Control {...{controlContainerClassName, controlClassName, label, labelClassName, name, ...restProps}}/>
}

const Control = (props) =>
{
	const {controlContainerClassName, controlClassName, label, labelClassName, name, ...restProps} = props;
	const [field, meta] = useField(props);
	return(
		<div>
			<div className={controlContainerClassName}>
				{label && <div>
					<label className={labelClassName} htmlFor={name}>{label}</label>
				</div>}
				<div className={controlsStyle.controlBlock}>
					<Field className={`${controlClassName} ${ meta.error ? controlsStyle.error : ""}`} id={name} name={name} {...restProps} />
					{meta.error && meta.touched  ? <TextError value={meta.error}/> : null}
				</div>
			</div>
		</div>
	);
}

export default FormControls;