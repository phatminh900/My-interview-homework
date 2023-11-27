import styles from "./card.module.scss";
const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};
export default Card;
