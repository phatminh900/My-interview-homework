import { ComponentProps } from "react";
import styles from "./button.module.scss";
interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  className?: string;
  btnType?: "primary" | "secondary" | "danger" | "neutral";
}
const Button = ({
  btnType = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  let btnClassName = ``;
  if (btnType === "primary") {
    btnClassName += `${styles["btnPrimary"]}`;
  }
  if (btnType === "secondary") {
    btnClassName += `${styles["btn--secondary"]}`;
  }
  if (btnType === "danger") {
    btnClassName += `${styles["btn--danger"]}`;
  }
  if (btnType === "neutral") {
    btnClassName += `${styles["btn--neutral"]}`;
  }
  return (
    <button
      className={`${btnClassName} ${styles.btn}  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
