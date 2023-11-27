import { UTILITIES } from "./sticky-utilities.data";
import styles from "./sticky-utilities.module.scss";
const StickyUtilities = () => {
  return (
    <div className={styles["sticky__box"]}>
      {UTILITIES.map((utility) => (
        <div className={styles["sticky__item"]} key={utility.title}>
          <button>{utility.icon}</button>
          <p className={styles["sticky__item--title"]}>{utility.title}</p>
        </div>
      ))}
    </div>
  );
};
export default StickyUtilities;
