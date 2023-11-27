import Text from "@/components/text/text.component";
import styles from "./footer-recent-trips.module.scss";
import Grid from "@/components/grid/grid.component";
import CardImage from "@/components/card-image/card-image.component";
import { TRIP_IMGs } from "./footer-recent-trips.data";
const FooterRecentTrips = () => {
  return (
    <div>
      <Text textType="title" className={styles["footer__title"]}>
        Recent Trips
      </Text>
      <Grid className={styles["footer__recent-box"]} columns={3}>
        {TRIP_IMGs.map((img) => (
          <CardImage
            sizes="(max-width: 576px) 130px,(max-width: 780) 200px, (max-width: 1200px) 85px, 125px"
            className={styles["footer__recent-img"]}
            key={img.src}
            src={img.src}
          >
            <a href={img.href}>&nbsp;</a>
          </CardImage>
        ))}
      </Grid>
    </div>
  );
};
export default FooterRecentTrips;
