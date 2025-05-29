import css from "./Button.module.scss";

const Button = ({ variable, className, onClick, children }) => {
  return (
    <button
      className={`${css.btn}${variable ? ` ${css[variable]}` : ""}${
        className ? ` ${className}` : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
