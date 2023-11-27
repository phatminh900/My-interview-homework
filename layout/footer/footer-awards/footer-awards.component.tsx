import Text from "@/components/text/text.component";
import styles from "./footer-awards.module.scss";
import Image from "next/image";
const FooterAwards = () => {
  return (
    <div>
      <div className={styles["footer__box"]}>
        <div>
          <Text textType="title" className={styles["footer__title"]}>
            Our Awards
          </Text>
          <Text textType="sub-title" className={styles["footer__description"]}>
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </Text>
        </div>
        <div className={styles['footer__img-box']}>
          <Image
            fill
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
            alt="Award img"
          />
        </div>
      </div>
    </div>
  );
};
export default FooterAwards;
