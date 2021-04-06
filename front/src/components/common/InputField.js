import TextField from "@material-ui/core/TextField";

const InputField = ({ onChange, value, label, margin, autoFocus, id }) => {
	return (
		<TextField
			required
			onChange={onChange}
			value={value}
			autoFocus={autoFocus}
			margin={margin}
			id={id}
			label={label}
			fullWidth
		/>
	)
};

export default InputField