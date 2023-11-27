import { SOCIAL_MEDIAS } from "./slide-nav-socials-medias.data";
import styles from "./slide-nav-socials-media.module.scss";
const SlideNavSocialMedias = () => {
  return (
    <ul className={styles["slide-nav__social-medias"]}>
      {SOCIAL_MEDIAS.map((social, index) => (
        <li key={index} className={styles["slide-nav__social-media"]}>
          <a href={social.href}>{social.icon}</a>
        </li>
      ))}
    </ul>
  );
};
export default SlideNavSocialMedias;
