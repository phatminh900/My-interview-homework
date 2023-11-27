import Image from "next/image";
import styles from "./image-demonstration.module.scss";
const ImageDemonstration = () => {
  return (
    <div className={styles.box}>
      <Image
        fill
        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"
        alt="beautiful bridge"
      />
    </div>
  );
};
export default ImageDemonstration;
