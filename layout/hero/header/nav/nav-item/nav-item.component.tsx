import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import styles from "./nav-item.module.scss";
import { ILink } from "../../header-links.data";
const NavItem = ({ href, title, subLinks }: ILink) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={href}>
        <p className={styles["sub-link__hierarchy"]}>{title}</p>
        <p>
          <HiChevronDown />
        </p>
      </a>
      {subLinks && (
        <ul className={styles["sub-links"]}>
          {subLinks.map((subLink) => (
            <li key={subLink.title} className={styles["sub-link"]}>
              <div className={styles["sub-link__box"]}>
                <a
                  className={styles["sub-link__hierarchy"]}
                  href={subLink.href}
                >
                  {subLink.title}
                </a>
                {subLink.subLinks && (
                  <>
                    <HiChevronRight />
                    <ul className={` ${styles["nested-sub-links"]}`}>
                      {subLink.subLinks.map((subLink) => (
                        <li
                          key={subLink.title}
                          className={`${styles["sub-link"]} ${styles["sub-link__last-hierarchy"]}`}
                        >
                          <div className={styles["sub-link__box"]}>
                            <a href={subLink.href}>{subLink.title}</a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default NavItem;
