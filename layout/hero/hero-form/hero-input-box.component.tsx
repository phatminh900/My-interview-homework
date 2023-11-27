import styles from "./hero-form.module.scss";
const HeroInputBox = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["form__input-box"]}>{children}</div>;
};
export default HeroInputBox;
