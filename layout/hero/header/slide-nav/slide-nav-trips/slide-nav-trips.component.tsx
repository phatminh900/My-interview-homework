import styles from "./slide-nav-trips.module.scss";
import { TRIPS } from "./slide-nav-trips.data";
import CardImage from "@/components/card-image/card-image.component";
import RibbonPrice from "@/components/ribbon-price/ribbon-price.component";
import Stars from "@/components/stars/stars.component";
const SlideNavTrips = () => {
  return (
    <ul className={styles["slide-nav__trips"]}>
      {TRIPS.map((trip) => (
        <li key={trip.title}>
          <a className={styles["slide-nav__trip"]} href={trip.href}>
            <CardImage
              sizes="(max-width: 576px) 250px,(max-width: 780) 400px, (max-width: 1200px) 200px, 260px"
              className={styles["slide-nav__trip"]}
              src={trip.src}
            >
              <RibbonPrice
                className={styles["slide-nav__price"]}
                originalPrice={trip.originalPrice}
                salesPrice={trip.salesPrice}
              />
              <div className={styles["slide-nav__detail"]}>
                <p className={styles["slide-nav__trip-title"]}>{trip.title}</p>
                <Stars quantity={trip.reviewQuantity} />
              </div>
            </CardImage>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SlideNavTrips;
