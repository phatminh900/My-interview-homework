import CardImage from "@/components/card-image/card-image.component";
import styles from "./popular-imgs.module.scss";
import Grid from "@/components/grid/grid.component";
import { DESTINATION_IMGS } from "./popular-imgs.data";
const PopularImgs = () => {
  return (
    <Grid columns={4} className={styles["img-box"]}>
      {DESTINATION_IMGS.map((destination) => (
        <a href="#" key={destination.title}>
          <CardImage
            sizes="(max-width: 780px) 300px, (max-width: 1200px) 200px, 300px"
            src={destination.src}
          >
            <p className={styles["img-box__title"]}>{destination.title}</p>
          </CardImage>
        </a>
      ))}
    </Grid>
  );
};
export default PopularImgs;
