import "./Calculator.css";

function ClearButton(props) {
  return (
    <div onClick={props.handleClear} className="clear-btn operator">
      AC
    </div>
  );
}

export default ClearButton;
