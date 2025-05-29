import { forwardRef } from "react";
import css from "./Box.module.scss";

/* 포지션 정렬만을 위한 컴포넌트 (스타일X) */
const Box = forwardRef(
  (
    { position = "cc", direction = "row", gap, wrap, className, children },
    ref
  ) => {
    return (
      <div
        className={`${css.box} ${css[position]} ${
          wrap === true ? css.wrap : ""
        } ${css[direction]} ${className}`}
        style={{ gap: gap }}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default Box;
