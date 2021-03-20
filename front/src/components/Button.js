const Button = ({ color, text, onClick }) => {
    return (
      <button
        className="btn btn-default"
        style={{
          margin: '10px 10px 10px 0',
          backgroundColor: color,
          border: '1px solid'
        }}
        onClick={onClick}
        >
          {text}
      </button>
    );
};

export default Button;