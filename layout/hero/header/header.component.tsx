"use client";
import { memo } from "react";
import Logo from "./logo/logo.component";
import Nav from "./nav/nav.component";
import styles from "./header.module.scss";
import SlideNav from "./slide-nav/slide-nav.component";
import useHeader from "./header.hook";
const Header = memo(function Header() {
  const {
    handleCloseMobileSlide,
    handleOpenMobileSlide,
    headerRef,
    isDefaultLogo,
    isOpenMobileSlide,
  } = useHeader();
  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles["header__box"]}>
        <Logo isDefaultLogo={isDefaultLogo} />
        <Nav
          isOpenMobileSlide={isOpenMobileSlide}
          onOpenMobileSlide={handleOpenMobileSlide}
        />
      </div>
      <SlideNav
        isOpen={isOpenMobileSlide}
        onCloseMobileSlide={handleCloseMobileSlide}
      />
    </header>
  );
});
export default Header;
