"use client";
import { createPortal } from "react-dom";
import { Header } from "./header";
import HeroDescription from "./hero-description/hero-description.component";
import HeroForm from "./hero-form/hero-form.container";
import HeroVideo from "./hero-video/hero-video.component";
import styles from "./hero.module.scss";
import { HiChevronUp } from "react-icons/hi";
import useHero from "./hero.hook";
const Hero = () => {
  const {
    isDocumentMounted,
    heroElementRef,
    isShowButtonToTheTop,
    handleScrollToTheTop,
  } = useHero();
  return (
    <div className={styles.hero} ref={heroElementRef}>
      <div className={styles["hero__box"]}>
        <HeroVideo />
      </div>
      <Header />
      <div className={styles["hero__introduction"]}>
        <HeroDescription />
        <HeroForm />
      </div>

      {/* put out side of this element by using portal (because it semantically lives outside ) */}
      {isDocumentMounted &&
        createPortal(
          <button
            onClick={handleScrollToTheTop}
            className={`${styles["btn-to-top"]} ${
              isShowButtonToTheTop ? styles["active"] : ""
            }
          }`}
          >
            <HiChevronUp />
          </button>,
          document.body
        )}
    </div>
  );
};
export default Hero;
