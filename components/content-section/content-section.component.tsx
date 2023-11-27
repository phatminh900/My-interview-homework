import Text from "../text/text.component";
import styles from "./content-section.module.scss";
const ContentSection = ({
  description,
  title,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.section}>
      <div className={styles["section__info"]}>
        <h1 className={styles["section__title"]}>{title}</h1>
        <Text textType="sub-title">{description}</Text>
      </div>
      {children}
    </div>
  );
};
export default ContentSection;
