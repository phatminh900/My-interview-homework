"use client";
import { useEffect, useRef } from "react";
import { HiX } from "react-icons/hi";
import styles from "./slide-nav.module.scss";
import SlideNavLink from "./slide-nav-links/slide-nav-links.component";
import SlideNavTrips from "./slide-nav-trips/slide-nav-trips.component";
import SlideNavSocialMedias from "./slide-nav-socials-medias/slide-nav-socials-medias.component";
const SlideNav = ({
  isOpen,
  onCloseMobileSlide,
}: {
  isOpen: boolean;
  onCloseMobileSlide: () => void;
}) => {
  const containerHolderRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const containerHolderElement = containerHolderRef.current;
    const clickOutSide = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.classList.contains(styles["slide-nav"]) &&
        !target.classList.contains(styles["slide-nav__nav"])
      ) {
        onCloseMobileSlide();
      }
    };
    // press ecs close modal
    const pressEcsCloseModal = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === "Escape") onCloseMobileSlide();
    };
    document.addEventListener("keydown", pressEcsCloseModal);
    containerHolderElement?.addEventListener("click", clickOutSide);
    return () => {
      document.removeEventListener("keypress", pressEcsCloseModal);

      containerHolderElement?.removeEventListener("click", clickOutSide);
    };
  }, [onCloseMobileSlide]);
  return (
    <div
      ref={containerHolderRef}
      className={`${styles["slide-nav"]} ${
        isOpen ? styles.active : styles["un-active"]
      }`}
    >
      <nav
        ref={contentRef}
        className={`${styles["slide-nav__nav"]}  ${
          isOpen ? styles.active : styles["un-active"]
        }`}
      >
        <div className={styles["slide-nav__close-btn-box"]}>
          <button
            onClick={onCloseMobileSlide}
            className={styles["slide-nav__close-btn"]}
          >
            <HiX />
          </button>
        </div>
        <SlideNavLink />
        <SlideNavTrips />
        <SlideNavSocialMedias />
      </nav>
    </div>
  );
};
export default SlideNav;
