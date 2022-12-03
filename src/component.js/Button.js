import PropTypes from "prop-types";

function Button({ prifixIconSrc, label, backgroundColor, size, handleClick, border }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: border ? border : "none",
  };
  return (
    <button onClick={handleClick} style={style}>
      {prifixIconSrc && <img src={prifixIconSrc} alt="Lamp" width="14" height="14" />} {label}
    </button>
  );
}

Button.propTypes = {
  prifixIconSrc: PropTypes.string,
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button