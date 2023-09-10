import "./input.css";

const Input = (props) => {
	const setValue = (e) => {
		props.setValue(e.target.value);
	};

	return (
		<div className={`input-${props.type}`}>
			<label htmlFor={props.title}>{props.title}</label>
			<input
				type={props.type}
				placeholder={props.placeholder}
				id={props.title}
				required={props.required}
				value={props.value}
				onChange={setValue}
			/>
		</div>
	);
};

export default Input;
