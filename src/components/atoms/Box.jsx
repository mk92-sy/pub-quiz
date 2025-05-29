import css from "./Box.module.scss";

/* 포지션 정렬만을 위한 컴포넌트 (스타일X) */
const Box = ({
  position = "cc",
  direction = "row",
  gap,
  className,
  children,
}) => {
  return (
    <div
      className={`${css.box} ${css[position]} ${css[direction]} ${className}`}
      style={{ gap: gap }}
    >
      {children}
    </div>
  );
};

export default Box;
