import "./Calculator.css";

function Button(props) {
  return (
    <div
      onClick={() => props.handleClick(props.children)}
      className={`${isNaN(props.children) ? "operator" : "btn-number"}`}
    >
      {props.children}
    </div>
  );
}

export default Button;
