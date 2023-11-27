import CardImage from "@/components/card-image/card-image.component";
import styles from "./choose-us-img.module.scss";
import Image from "next/image";
import Text from "@/components/text/text.component";
import { CHOOSE_US_IMGS } from "./choose-us-imgs.data";
import Grid from "@/components/grid/grid.component";
const ChooseUsImgs = () => {
  return (
    <Grid columns={3} className={styles["img-box"]}>
      {CHOOSE_US_IMGS.map((reason) => (
        <div className={styles["box"]} key={reason.src}>
          <div>
            <Image
              width={150}
              height={150}
              src={reason.src}
              alt="reason to choose us"
            />
          </div>
          <Text textType="title">{reason.title}</Text>
          <p>{reason.description}</p>
        </div>
      ))}
    </Grid>
  );
};
export default ChooseUsImgs;
