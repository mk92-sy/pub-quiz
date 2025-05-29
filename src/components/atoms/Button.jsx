import css from "./Button.module.scss";

const Button = ({ variable, onClick, children }) => {
  return (
    <button
      className={`${css.btn}${variable ? ` ${css[variable]}` : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
