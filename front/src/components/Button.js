const Button = ({ classname, text, onClick }) => {
  console.log(classname)
    return (
      <button
        className= {`btn ${classname}`}
        onClick={onClick}
        >
          {text}
      </button>
    );
};

export default Button;  