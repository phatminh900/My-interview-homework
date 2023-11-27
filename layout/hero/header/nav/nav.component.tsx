import { HiMenu, HiShoppingCart } from "react-icons/hi";
import styles from "./nav.module.scss";
import NavItem from "./nav-item/nav-item.component";
import { LINKS } from "../header-links.data";
const Nav = ({
  onOpenMobileSlide,
  isOpenMobileSlide,
}: {
  isOpenMobileSlide: boolean;
  onOpenMobileSlide: () => void;
}) => {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles["nav__list"]} ${styles["nav__list--desktop"]}`}>
        {LINKS.map((link) => (
          <NavItem
            subLinks={link.subLinks}
            key={link.title}
            href={link.href}
            title={link.title}
          />
        ))}
      </ul>
      <ul className={styles["nav__list"]}>
        <li className={styles["nav__list"]}>
          <button
            onClick={onOpenMobileSlide}
            disabled={isOpenMobileSlide}
            className={`${styles.item} ${styles["nav__list--icon"]}`}
          >
            <HiMenu />
          </button>
        </li>
        <li className={styles["nav__list"]}>
          <a
            href="#"
            data-cart-quantity={0}
            className={`${styles.item} ${styles["nav__list--icon"]} ${styles["nav__list--cart"]}`}
          >
            <HiShoppingCart />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
