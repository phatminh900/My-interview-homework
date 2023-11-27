import { useState } from "react";
import styles from "./slide-nav-links.module.scss";
import { LINKS } from "../../header-links.data";
import { HiChevronLeft } from "react-icons/hi";
const SlideNavLink = () => {
  const [isOpenNestedLink, setIsOpenNestedLink] = useState(false);
  const [linkPosition, setLinkPosition] = useState<null | number>(null);
  const subLinks = LINKS.map(({ subLinks }) => subLinks);
  const toggleOpenState = () => setIsOpenNestedLink((prev) => !prev);
  return (
    <div className={styles["slide-nav__links-box"]}>
      <ul
        className={`${styles["slide-nav__links"]} ${
          isOpenNestedLink && styles.active
        }`}
      >
        {LINKS.map((link, index) => (
          <li
            key={link.title}
            onClick={() => {
              setLinkPosition(index);
              toggleOpenState();
            }}
          >
            <a href={link.href} className={styles["slide-nav__link"]}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      {linkPosition !== null && linkPosition >= 0 && (
        <ul
          className={`${styles["slide-nav__nested-links"]} ${
            isOpenNestedLink && styles.active
          }`}
        >
          <button
            onClick={toggleOpenState}
            className={styles["slide-nav__nested-btn"]}
          >
            <HiChevronLeft /> Back
          </button>
          {subLinks[linkPosition!].map((link) => (
            <li key={link.title}>
              <div>
                <a href={link.href} className={styles["slide-nav__link"]}>
                  {link.title}
                </a>
                <ul className={styles["slide-nav__nested-hierarchy"]}>
                  {link.subLinks?.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className={styles["slide-nav__link"]}
                    >
                      {link.title}
                    </a>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SlideNavLink;
