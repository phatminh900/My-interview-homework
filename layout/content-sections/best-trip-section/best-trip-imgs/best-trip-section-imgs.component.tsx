import { HiClock } from "react-icons/hi";
import CardImage from "@/components/card-image/card-image.component";
import styles from "./best-trip-section-imgs.module.scss";
import Stars from "@/components/stars/stars.component";
import Text from "@/components/text/text.component";
import { TRIPS } from "./best-trip-imgs.data";
import Grid from "@/components/grid/grid.component";
import RibbonPrice from "@/components/ribbon-price/ribbon-price.component";
const BestTripsImgs = () => {
  return (
    <Grid columns={3} className={styles["img-box"]}>
      {TRIPS.map((trip) => (
        <a href={trip.href} className={styles["img-box__box"]} key={trip.title}>
          <CardImage
            sizes="(max-width: 576px) 250px,(max-width: 780) 400px, (max-width: 1200px) 200px, 260px"
            className={styles["img-box__img"]}
            src={trip.src}
          >
            <RibbonPrice
              originalPrice={trip.originalPrice}
              salesPrice={trip.salesPrice}
              className={styles["img-box__ribbon"]}
            />
          </CardImage>
          <div className={styles["img-box__content"]}>
            <div className={styles["img-box__content--info"]}>
              <Text
                className={styles["img-box__content--title"]}
                textType="title"
              >
                {trip.title}
              </Text>

              <p className={styles["img-box__content--description"]}>
                {trip.specials.map((special) => special)}
              </p>
            </div>
            <div className={styles["img-box__content--review-duration"]}>
              <div className={styles["img-box__content--review"]}>
                <Stars quantity={trip.reviewQuantity} />
                <p>
                  {trip.reviewQuantity > 1
                    ? `${trip.reviewQuantity} reviews`
                    : `${trip.reviewQuantity} review`}
                </p>
              </div>

              <p className={styles["img-box__content--duration"]}>
                <HiClock />{" "}
                {trip.duration > 1 ? ` ${trip.duration} days` : `1 day`}
              </p>
            </div>
          </div>
        </a>
      ))}
    </Grid>
  );
};
export default BestTripsImgs;
