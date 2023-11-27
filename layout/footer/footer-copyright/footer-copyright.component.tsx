import styles from "./footer-copyright.module.scss";
import { NAV_LINKS } from "./footer-nav.data";
const FooterCopyright = () => {
  return (
    <div className={styles["footer__copyright"]}>
      <p>&copy; Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
      <ul className={styles["footer__copyright--links"]}>
        {NAV_LINKS.map((link) => (
          <li key={link.title}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterCopyright;
