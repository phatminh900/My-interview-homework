import { useEffect, useRef, useState } from "react";

const useHero = () => {
  const [isDocumentMounted, setIsDocumentMounted] = useState(false);
  const heroElementRef = useRef<HTMLDivElement | null>(null);
  const [isShowButtonToTheTop, setIsShowButtonToTheTop] = useState(false);
  const handleScrollToTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          setIsShowButtonToTheTop(true);
          return;
        }
        setIsShowButtonToTheTop(false);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );
    if (heroElementRef.current) {
      observer.observe(heroElementRef.current);
    }
  }, []);
  useEffect(() => {
    setIsDocumentMounted(true);
  }, []);
  return {
    heroElementRef,
    isShowButtonToTheTop,
    handleScrollToTheTop,
    isDocumentMounted,
  };
};
export default useHero;
