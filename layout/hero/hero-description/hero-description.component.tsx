import styles from "./hero-description.module.scss";
const HeroDescription = () => {
  return (
    <div className={styles.description}>
      <h1>Where do you want to go?</h1>
      <p className="text-white">
        Trips, experiences, and places. All in one service.
      </p>
    </div>
  );
};
export default HeroDescription;
