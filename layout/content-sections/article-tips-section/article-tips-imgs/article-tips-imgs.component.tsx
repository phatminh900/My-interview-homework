import { HiChevronRight } from "react-icons/hi";
import CardImage from "@/components/card-image/card-image.component";
import styles from "./article-tips-imgs.module.scss";
import Text from "@/components/text/text.component";
import { ARTICLES_TRIPS } from "./article-tips-imgs.data";
import Grid from "@/components/grid/grid.component";
const ArticleTripsImgBoxs = () => {
  return (
    <Grid columns={3} className={styles["img-box"]}>
      {ARTICLES_TRIPS.map((article) => (
        <a href="#" className={styles["img-box__box"]} key={article.title}>
          <CardImage
            sizes="(max-width: 576px) 180px ,(max-width: 780px) 220px, (max-width: 1200px) 180px, 200px"
            className={styles["img-box__img"]}
            src={article.src}
          >
            <p>&nbsp;</p>
          </CardImage>
          <div className={styles["img-box__content"]}>
            <div className={styles["img-box__content--info"]}>
              <Text
                className={styles["img-box__content--title"]}
                textType="title"
              >
                {article.title}
              </Text>
              <Text textType="sub-title">{article.description}</Text>
            </div>
            <button className={styles["img-box__content--read-more"]}>
              Read More <HiChevronRight></HiChevronRight>
            </button>
          </div>
        </a>
      ))}
    </Grid>
  );
};
export default ArticleTripsImgBoxs;
