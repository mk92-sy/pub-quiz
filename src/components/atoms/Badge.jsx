import css from "./Badge.module.scss";

const Badge = ({ variable, children }) => {
  return (
    <span className={`${css.badge}${variable ? ` ${css[variable]}` : ""}`}>
      {children}
    </span>
  );
};

export default Badge;
