const buttonStyle = {
  margin: "1em",
  borderRadius: "5px",
  minHeight: "2em",
};

const Button = ({onClick, children}) => (
  <button style={buttonStyle} onClick={onClick}>
    {children}
  </button>
);

export default Button;
