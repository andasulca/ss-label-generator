const Button = ({ classname, text, onClick }) => {
	return (
		<button
			className={`btn ${classname}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;