import {Field, useField} from "formik";
import styleClasses from "./controlComponents/Controls.module.css";
import TextError from "./controlComponents/TextError";

/**
 * @name FormControls
 * @description Form control creator
 * @param {string} control Type of control (e.g. textarea, input, checkbox)
 * @param {string} controlBlockClassName Control block style class name
 * @param {string} controlClassName Control style class name
 * @param {string} label Label value
 * @param {string} labelClassName Label style class name
 * @param {string} name Name of control (Formik required)
 * @param {*} restProps Any others properties
 */
const FormControls = ({control, controlBlockClassName="", controlClassName="", label, labelClassName="", name, ...restProps}) =>
{
	switch (control)
	{
		case "textarea":
		{
			restProps.as = control;
			break;
		}
		case "checkbox":
		{
			restProps.type = control;
			break;
		}
	}
	return <Control {...{controlBlockClassName, controlClassName, label, labelClassName, name, ...restProps}}/>
}

const Control = (props) =>
{
	const {controlBlockClassName, controlClassName, label, labelClassName, name, ...restProps} = props;
	const [field, meta] = useField(props);
	return(
		<div>
			<div className={controlBlockClassName}>
				{label && <div>
					<label className={labelClassName} htmlFor={name}>{label}</label>
				</div>}
				<div>
					<Field className={`${controlClassName} ${ meta.error ? styleClasses.error : ""}`} id={name} name={name} {...restProps} />
				</div>
			</div>
			{meta.error && meta.touched  ? <TextError value={meta.error}/> : null}
		</div>
	);
}

export default FormControls;