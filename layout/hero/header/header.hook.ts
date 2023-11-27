import { useState, useRef, useCallback, useEffect } from "react";
import styles from "./header.module.scss";
const useHeader = () => {
  const [isOpenMobileSlide, setIsOpenMobileSlide] = useState(false);
  const [isDefaultLogo, setIsDefaultLogo] = useState(true);
  const headerRef = useRef<HTMLHeadElement | null>(null);
  // when the slide mobile is opened prevent scrolling from the body
  const handleOpenMobileSlide = useCallback(
    () => setIsOpenMobileSlide(true),
    []
  );
  const handleCloseMobileSlide = useCallback(
    () => setIsOpenMobileSlide(false),
    []
  );
  useEffect(() => {
    if (isOpenMobileSlide) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpenMobileSlide]);
  useEffect(() => {
    let initialScrollPosition = 0;
    function handleScroll() {
      function addActiveClass() {
        headerRef.current?.classList.remove(styles["un-active"]);
        headerRef.current?.classList.add(styles["active"]);
        headerRef.current?.classList.remove(styles["default"]);
      }
      function removeActiveClass() {
        headerRef.current?.classList.remove(styles["default"]);

        headerRef.current?.classList.add(styles["un-active"]);
        headerRef.current?.classList.remove(styles["active"]);
      }
      // Get the current scroll position
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      // do not scroll or scroll up to the top change the logo to white again
      if (scrollTop === 0 && !isDefaultLogo) {
        setIsDefaultLogo(true);
        headerRef.current?.classList.add(styles["default"]);
        headerRef.current?.classList.remove(styles["un-active"]);
        headerRef.current?.classList.remove(styles["active"]);
        return;
      }
      // Check if the current scroll position is greater than the previous one
      if (scrollTop > initialScrollPosition) {
        // Scrolling down ==> hide the header
        removeActiveClass();
      } else {
        // Scrolling up ==> show the header

        addActiveClass();

        // change the logo color
        setIsDefaultLogo(false);
        // set the zindex high for header parent element
        (headerRef.current?.parentElement as HTMLElement).style.zIndex = "150";
      }

      // Update the last scroll position
      initialScrollPosition = scrollTop;
    }
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isDefaultLogo]);
  return {
    handleCloseMobileSlide,
    handleOpenMobileSlide,
    headerRef,
    isDefaultLogo,
    isOpenMobileSlide,
  };
};
export default useHeader;
