import { ComponentProps } from "react";
import styles from "./text.module.scss";
interface ITextProps extends ComponentProps<"p"> {
  children: React.ReactNode;
  className?: string;
  textType: "title" | "sub-title";
}
const Text = ({ children, className, textType, ...props }: ITextProps) => {
  let textClasses = ``;
  if (textType === "title") {
    textClasses += `${styles["text--title"]}`;
  }
  if (textType === "sub-title") {
    textClasses += `${styles["text--subTitle"]}`;
  }
  return (
    <p className={`${styles["text"]} ${textClasses} ${className}`}>
      {children}
    </p>
  );
};
export default Text;
