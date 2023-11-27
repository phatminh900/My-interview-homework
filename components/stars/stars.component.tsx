import { HiOutlineStar, HiStar } from "react-icons/hi";
import styles from "./stars.module.scss";
const Stars = ({ quantity }: { quantity: number }) => {
  const fiveStars = Array.from({ length: 5 });
  return (
    <ul className={styles["stars"]}>
      {fiveStars.map((_, index) => (
        <li key={index}>
          {quantity >= index + 1 ? (
            <span className={styles["stars--active"]}>
              <HiStar />
            </span>
          ) : (
            <span>
              <HiOutlineStar />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Stars;
